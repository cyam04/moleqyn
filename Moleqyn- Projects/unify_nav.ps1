# Unified navbar CSS to inject into <style> tag of pages
$navCSS = @'

    /* ===== UNIFIED MATTERLAB FLOATING NAVBAR ===== */
    :root{--glass-bg:rgba(15,23,42,0.7);--nav-bg-scrolled:rgba(15,23,42,0.98);--glass-border:rgba(255,255,255,0.08);--btn-primary:#0ea5e9;}
    html.light-mode{--bg:#f0f9ff;--bg2:#ffffff;--glass:rgba(0,0,0,0.04);--border:rgba(0,0,0,0.12);--text:#0f172a;--muted:#64748b;--primary:#0284c7;--primary-glow:rgba(2,132,199,0.2);--secondary:#db2777;--glass-bg:rgba(255,255,255,0.85);--nav-bg-scrolled:rgba(255,255,255,0.98);--glass-border:rgba(0,0,0,0.1);--btn-primary:#0284c7;}
    .mlab-nav{position:fixed;top:20px;left:50%;transform:translateX(-50%);width:95%;max-width:1200px;background:var(--glass-bg);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);display:flex;justify-content:space-between;align-items:center;padding:12px 25px;border-radius:40px;border:1px solid var(--glass-border);z-index:1000;box-shadow:0 10px 30px rgba(0,0,0,0.1);transition:all 0.4s ease;}
    .mlab-nav.scrolled{top:10px;background:var(--nav-bg-scrolled);box-shadow:0 15px 40px rgba(0,0,0,0.15);border-color:var(--primary);}
    .mlab-brand{font-family:'Space Grotesk',sans-serif;font-size:1.4rem;font-weight:700;color:var(--text);text-decoration:none;}
    .mlab-brand span{color:var(--primary);}
    .mlab-links{display:flex;list-style:none;align-items:center;gap:0.4rem;}
    .mlab-links>li>a{color:var(--muted);text-decoration:none;font-size:0.88rem;font-weight:500;padding:7px 14px;border-radius:20px;transition:all 0.2s;display:block;}
    .mlab-links>li>a:hover,.mlab-links>li>a.active{color:var(--primary);background:var(--primary-glow);}
    .mlab-dropdown{position:relative;}
    .mlab-dropbtn{color:var(--muted);text-decoration:none;font-size:0.88rem;font-weight:500;padding:7px 14px;border-radius:20px;cursor:pointer;display:flex;align-items:center;gap:4px;transition:all 0.2s;}
    .mlab-dropbtn:hover{color:var(--primary);background:var(--primary-glow);}
    .mlab-dropdown-content{display:none;position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-50%);background:var(--nav-bg-scrolled);border:1px solid var(--glass-border);border-radius:16px;padding:8px;min-width:270px;box-shadow:0 20px 50px rgba(0,0,0,0.3);z-index:2000;backdrop-filter:blur(20px);}
    .mlab-dropdown:hover .mlab-dropdown-content{display:block;animation:navFadeIn 0.2s ease;}
    @keyframes navFadeIn{from{opacity:0;transform:translateX(-50%) translateY(-8px);}to{opacity:1;transform:translateX(-50%) translateY(0);}}
    .mlab-drop-item{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:10px;text-decoration:none;color:var(--muted);transition:all 0.2s;}
    .mlab-drop-item:hover{background:var(--primary-glow);color:var(--primary);}
    .mlab-drop-icon{font-size:1.1rem;width:30px;text-align:center;}
    .mlab-drop-title{font-size:0.84rem;font-weight:600;color:var(--text);}
    .mlab-drop-sub{font-size:0.71rem;color:var(--muted);margin-top:2px;}
    .mlab-drop-item:hover .mlab-drop-title{color:var(--primary);}
    .mlab-nav-right{display:flex;align-items:center;gap:10px;}
    .mlab-login-btn{background:var(--btn-primary);color:#fff !important;text-decoration:none;padding:7px 18px;border-radius:20px;font-size:0.85rem;font-weight:600;transition:all 0.2s;}
    .mlab-login-btn:hover{opacity:0.85;box-shadow:0 4px 15px var(--primary-glow);}
    .mlab-theme-btn{background:none;border:1px solid var(--glass-border);color:var(--text);width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:1rem;transition:all 0.3s;}
    .mlab-theme-btn:hover{border-color:var(--primary);}
    /* ===== END NAVBAR CSS ===== */
'@

$navHTML = @'
  <nav class="mlab-nav" id="mlabNav">
    <a href="index.html" class="mlab-brand">⚗️ Mole<span>qyn</span></a>
    <ul class="mlab-links">
      <li><a href="index.html">Home</a></li>
      <li class="mlab-dropdown">
        <a class="mlab-dropbtn">Virtual Labs ▾</a>
        <div class="mlab-dropdown-content">
          <a href="simulators.html" class="mlab-drop-item"><div class="mlab-drop-icon">🧪</div><div><div class="mlab-drop-title">Virtual Simulators</div><div class="mlab-drop-sub">Interactive engines for Class 6-12</div></div></a>
          <a href="experiments.html" class="mlab-drop-item"><div class="mlab-drop-icon">📔</div><div><div class="mlab-drop-title">Experiment Library</div><div class="mlab-drop-sub">NCERT guided practicals</div></div></a>
          <a href="periodic-table.html" class="mlab-drop-item"><div class="mlab-drop-icon">🔢</div><div><div class="mlab-drop-title">Periodic Table</div><div class="mlab-drop-sub">Explore all 118 elements</div></div></a>
          <a href="reaction.html" class="mlab-drop-item"><div class="mlab-drop-icon">⚗️</div><div><div class="mlab-drop-title">Reaction Balancer</div><div class="mlab-drop-sub">Balance chemical equations</div></div></a>
          <a href="ai-tutor.html" class="mlab-drop-item"><div class="mlab-drop-icon">🤖</div><div><div class="mlab-drop-title">AI Chemistry Tutor</div><div class="mlab-drop-sub">Ask any doubt 24/7</div></div></a>
        </div>
      </li>
      ACTIVE_LINKS_PLACEHOLDER
    </ul>
    <div class="mlab-nav-right">
      <a href="login.html" class="mlab-login-btn">Login</a>
      <button class="mlab-theme-btn" id="mlabThemeBtn" title="Switch Theme">☀️</button>
    </div>
  </nav>
  <script>
    (function(){
      var nav=document.getElementById('mlabNav'),btn=document.getElementById('mlabThemeBtn');
      if(!nav||!btn)return;
      if(localStorage.getItem('mlab-theme')==='light'){document.documentElement.classList.add('light-mode');btn.textContent='🌙';}
      btn.addEventListener('click',function(){document.documentElement.classList.toggle('light-mode');var l=document.documentElement.classList.contains('light-mode');localStorage.setItem('mlab-theme',l?'light':'dark');btn.textContent=l?'🌙':'☀️';});
      window.addEventListener('scroll',function(){nav.classList.toggle('scrolled',window.scrollY>50);});
    })();
  </script>
'@

function Get-ActiveLinks($activePage) {
    $learn   = if ($activePage -eq 'learn') { '<li><a href="learn.html" class="active">Learn</a></li>' } else { '<li><a href="learn.html">Learn</a></li>' }
    $res     = if ($activePage -eq 'resources') { '<li><a href="resources.html" class="active">Resources</a></li>' } else { '<li><a href="resources.html">Resources</a></li>' }
    $quiz    = if ($activePage -eq 'quiz') { '<li><a href="quiz.html" class="active">Quiz</a></li>' } else { '<li><a href="quiz.html">Quiz</a></li>' }
    $dash    = if ($activePage -eq 'dashboard') { '<li><a href="dashboard.html" class="active">Progress</a></li>' } else { '<li><a href="dashboard.html">Progress</a></li>' }
    $about   = if ($activePage -eq 'about') { '<li><a href="about.html" class="active">About</a></li>' } else { '<li><a href="about.html">About</a></li>' }
    $contact = if ($activePage -eq 'contact') { '<li><a href="contact.html" class="active">Contact</a></li>' } else { '<li><a href="contact.html">Contact</a></li>' }
    return "$learn`n      $res`n      $quiz`n      $dash`n      $about`n      $contact"
}

function Update-UnifiedNav($filename, $activePage, $oldNavStart, $oldNavEnd) {
    $content = [System.IO.File]::ReadAllText((Resolve-Path $filename), [System.Text.Encoding]::UTF8)

    # 1. Inject CSS before </style>
    if ($content -notmatch 'mlab-nav') {
        $content = $content -replace '</style>', "$navCSS`n  </style>"
    }

    # 2. Remove old nav and replace with unified nav
    $links = Get-ActiveLinks $activePage
    $navFinal = $navHTML -replace 'ACTIVE_LINKS_PLACEHOLDER', $links

    # Use regex to remove from old nav opening to </nav> (first nav)
    $content = [regex]::Replace($content, '(?s)<nav[\s\S]*?</nav>', $navFinal, [System.Text.RegularExpressions.RegexOptions]::None, [timespan]::FromSeconds(5))

    # Remove old mobile-menu block if present
    $content = [regex]::Replace($content, '(?s)<div id="mobile-menu"[\s\S]*?</div>\s*', '')

    # Write back
    [System.IO.File]::WriteAllText((Resolve-Path $filename), $content, [System.Text.Encoding]::UTF8)
    Write-Host "✅ Updated: $filename"
}

# Process each page
Update-UnifiedNav 'learn.html'       'learn'
Update-UnifiedNav 'experiments.html' 'experiments'
Update-UnifiedNav 'about.html'       'about'
Update-UnifiedNav 'quiz.html'        'quiz'

Write-Host "`n🎉 All pages updated with unified navbar!"
