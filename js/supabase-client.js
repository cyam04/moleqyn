/**
 * MOLEQYN CLOUD DATABASE ENGINE — Supabase Client Integration
 * Provides cross-device cloud synchronization for student telemetry,
 * contact helpdesk inquiries, and interactive laboratory quiz mastery.
 * 
 * Includes graceful offline fallback to localStorage when offline or unconfigured.
 */

(function (window) {
  'use strict';

  const STORAGE_KEY_URL = 'moleqyn_supabase_url';
  const STORAGE_KEY_ANON = 'moleqyn_supabase_anon_key';

  // Default cloud endpoint (configurable from Admin Hub)
  const DEFAULT_SUPABASE_URL = 'https://moleqyn-db.supabase.co';
  const DEFAULT_SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vbGVxeW4tZGIiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTczMDAwMDAwMCwiZXhwIjoyMDQ1MDAwMDAwfQ.demo_key_moleqyn_active';

  let _client = null;

  function getSupabaseUrl() {
    return localStorage.getItem(STORAGE_KEY_URL) || DEFAULT_SUPABASE_URL;
  }

  function getSupabaseAnonKey() {
    return localStorage.getItem(STORAGE_KEY_ANON) || DEFAULT_SUPABASE_ANON;
  }

  function isConfigured() {
    const url = getSupabaseUrl();
    const key = getSupabaseAnonKey();
    return !!(url && key && url.includes('supabase.co'));
  }

  function getClient() {
    if (_client) return _client;
    const url = getSupabaseUrl();
    const key = getSupabaseAnonKey();

    if (window.supabase && typeof window.supabase.createClient === 'function' && url && key) {
      try {
        _client = window.supabase.createClient(url, key, {
          auth: {
            persistSession: false,
            autoRefreshToken: false
          }
        });
      } catch (err) {
        console.warn('Supabase client initialization notice:', err);
      }
    }
    return _client;
  }

  /**
   * Test live round-trip latency to the Supabase Cloud endpoint
   */
  async function pingCloud() {
    const start = performance.now();
    const client = getClient();
    if (!client) {
      return {
        success: false,
        latencyMs: 0,
        message: 'Supabase JS library not loaded or configuration empty'
      };
    }

    try {
      // Test querying count or version
      const { data, error } = await client
        .from('moleqyn_students')
        .select('id', { count: 'exact', head: true });

      const latencyMs = Math.round(performance.now() - start);

      if (error) {
        // Table may not exist yet, but connection to Supabase was established!
        if (error.code === '42P01' || error.message.includes('relation "moleqyn_students" does not exist')) {
          return {
            success: true,
            latencyMs,
            schemaNeeded: true,
            message: `Connected to Supabase in ${latencyMs}ms (Schema tables need to be created)`
          };
        }
        return {
          success: false,
          latencyMs,
          message: error.message || 'Error querying database'
        };
      }

      return {
        success: true,
        latencyMs,
        schemaNeeded: false,
        message: `Active Supabase connection verified (${latencyMs}ms)`
      };
    } catch (netErr) {
      const latencyMs = Math.round(performance.now() - start);
      return {
        success: false,
        latencyMs,
        message: netErr.message || 'Network connection failed'
      };
    }
  }

  /**
   * Sync a student's profile & telemetry to Supabase
   */
  async function syncStudent(userObj) {
    if (!userObj) return null;
    const client = getClient();
    if (!client) return null;

    try {
      const phoneClean = (userObj.phone || '').replace(/\D/g, '');
      const studentId = userObj.id || (phoneClean ? `STU-${phoneClean}` : `STU-${Math.floor(100000 + Math.random() * 900000)}`);
      
      let rawXp = userObj.xp || 100;
      let xpNum = typeof rawXp === 'number' ? rawXp : (parseInt(String(rawXp).replace(/\D/g, '')) || 100);

      const payload = {
        id: studentId,
        name: userObj.name || 'Scholar Student',
        email: userObj.email || (phoneClean ? `${phoneClean}@student.moleqyn.edu` : 'scholar@moleqyn.edu'),
        phone: userObj.phone || '+91 98765 43210',
        class: userObj.class || 'Class 11 Science • Arjuna JEE',
        avatar: userObj.avatar || '👨‍🔬',
        level: userObj.level || 1,
        xp: xpNum,
        labs_completed: userObj.labsCompleted || userObj.labs_completed || 0,
        login_method: userObj.loginMethod || userObj.login_method || 'Cloud Sync',
        last_active: new Date().toISOString()
      };

      const { data, error } = await client
        .from('moleqyn_students')
        .upsert(payload, { onConflict: 'id' });

      if (error) {
        console.warn('Cloud sync error for student:', error.message);
        return null;
      }
      return payload;
    } catch (e) {
      console.warn('Supabase student sync caught error:', e);
      return null;
    }
  }

  /**
   * Fetch all students from cloud database
   */
  async function fetchStudents() {
    const client = getClient();
    if (!client) return null;

    try {
      const { data, error } = await client
        .from('moleqyn_students')
        .select('*')
        .order('last_active', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (e) {
      console.warn('Cloud fetch students failed, using localStorage:', e.message);
      return null;
    }
  }

  /**
   * Sync a helpdesk / contact inquiry to Supabase
   */
  async function syncInquiry(inquiryObj) {
    if (!inquiryObj) return null;
    const client = getClient();
    if (!client) return null;

    try {
      const payload = {
        id: inquiryObj.id || 'INQ-' + Date.now(),
        ticket: inquiryObj.ticket || 'ML-TICKET',
        name: inquiryObj.name || 'Anonymous',
        email: inquiryObj.email || '',
        role: inquiryObj.role || 'student',
        category: inquiryObj.category || 'general',
        subject: inquiryObj.subject || 'Inquiry',
        message: inquiryObj.message || '',
        status: inquiryObj.status || 'New',
        created_at: inquiryObj.timestamp || new Date().toISOString()
      };

      const { data, error } = await client
        .from('moleqyn_inquiries')
        .upsert(payload, { onConflict: 'ticket' });

      if (error) {
        console.warn('Cloud inquiry sync error:', error.message);
        return null;
      }
      return payload;
    } catch (e) {
      console.warn('Supabase inquiry sync caught error:', e);
      return null;
    }
  }

  /**
   * Fetch all inquiries from cloud database
   */
  async function fetchInquiries() {
    const client = getClient();
    if (!client) return null;

    try {
      const { data, error } = await client
        .from('moleqyn_inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (e) {
      console.warn('Cloud fetch inquiries failed, using localStorage:', e.message);
      return null;
    }
  }

  /**
   * Record lab simulation completion or quiz score in cloud
   */
  async function syncLabScore(scoreObj) {
    const client = getClient();
    if (!client) return null;

    try {
      const payload = {
        student_id: scoreObj.studentId || 'ANON',
        student_name: scoreObj.studentName || 'Student',
        lab_title: scoreObj.labTitle || 'Virtual Simulation',
        score: scoreObj.score || 100,
        xp_awarded: scoreObj.xpAwarded || 50,
        created_at: new Date().toISOString()
      };

      const { data, error } = await client
        .from('moleqyn_lab_scores')
        .insert(payload);

      if (error) throw error;
      return payload;
    } catch (e) {
      console.warn('Cloud score sync error:', e);
      return null;
    }
  }

  function saveConfig(url, anonKey) {
    if (url) localStorage.setItem(STORAGE_KEY_URL, url.trim());
    else localStorage.removeItem(STORAGE_KEY_URL);

    if (anonKey) localStorage.setItem(STORAGE_KEY_ANON, anonKey.trim());
    else localStorage.removeItem(STORAGE_KEY_ANON);

    _client = null; // Reset cached instance
  }

  function getConfig() {
    return {
      url: getSupabaseUrl(),
      anonKey: getSupabaseAnonKey(),
      isCustom: !!localStorage.getItem(STORAGE_KEY_URL)
    };
  }

  // Export to global scope
  window.MoleqynCloud = {
    isConfigured,
    getClient,
    pingCloud,
    syncStudent,
    fetchStudents,
    syncInquiry,
    fetchInquiries,
    syncLabScore,
    saveConfig,
    getConfig
  };

})(window);
