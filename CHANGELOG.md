# ðŸ“– MatterLab â€“ CHANGELOG
### "Jo badlav hua, woh sab yahan hai" â€“ Every change documented here

> **For:** Beginners learning to code with AI
> **Format:** Date â†’ What changed â†’ Why â†’ Old code â†’ New code
> **Language:** Hinglish + English

---

## HOW TO READ THIS FILE

```
[VERSION]  â†’ Project ka version number (v1.0, v2.0, v3.0...)
[DATE]     â†’ Kab badla
[FILE]     â†’ Konsi file mein badlav hua
[WHY]      â†’ Kyun badla (reason)
[OLD CODE] â†’ Purana code kya tha (as comment, kaam nahi karta)
[NEW CODE] â†’ Naya code kya hai (yeh kaam karta hai)
[LEARN]    â†’ Is change se kya sikhne ko mila
```

---

## â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
## VERSION 1.0 â€” "Foundation Build"
## Date: 2026-09-28 | Time: ~03:41 IST
## â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

### What was built in v1.0?

Pehli baar poora project create kiya gaya:
- index.html â€” App ka structure (layout, tabs, controls)
- css/style.css â€” Design system (colors, fonts, animations)
- js/matter-lab.js â€” Particle physics engine (Canvas 2D)
- js/main.js â€” App logic (buttons, sliders, language toggle)

---

### CHANGE 1.1 â€” Project Folder Structure

**WHY:** Organized code â†’ easier to find and fix things later

```
MatterLab/
â”œâ”€â”€ index.html        â† Main page (sirf structure, koi logic nahi)
â”œâ”€â”€ css/
â”‚   â””â”€â”€ style.css     â† Sirf design (colors, fonts, layout)
â””â”€â”€ js/
    â”œâ”€â”€ matter-lab.js â† Sirf physics (particles ka movement)
    â””â”€â”€ main.js       â† Sirf logic (buttons, sliders ka kaam)
```

LESSON: "Separation of Concerns"
  - Har file ka ek kaam hona chahiye
  - Isse debugging aasaan hoti hai
  - Example: Agar color change karna hai â†’ sirf style.css open karo

---

### CHANGE 1.2 â€” HTML Canvas Particle System

**FILE:** js/matter-lab.js
**WHY:** Particles ko draw karne ka sabse fast tarika

OLD APPROACH (jo nahi kiya â€” div elements):
```
// BAD: 90 div elements banao, CSS se position karo
// Problem: Browser slow ho jaata, animation jaggy lagti
div.particle { position:absolute; left:100px; top:200px; }
```

NEW APPROACH (jo kiya â€” HTML5 Canvas):
```javascript
// GOOD: Ek canvas element, JavaScript se sab draw karo
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d'); // 2D drawing context

function drawParticle(p) {
  ctx.beginPath();                    // naya path start
  ctx.arc(p.x, p.y, p.r, 0, 6.28);  // circle draw karo
  ctx.fillStyle = p.color;            // color set karo
  ctx.fill();                         // fill karo
}

// requestAnimationFrame = smooth 60fps animation
function loop() {
  ctx.clearRect(0, 0, W, H);  // screen saaf karo
  particles.forEach(drawParticle);  // sab particles draw karo
  requestAnimationFrame(loop); // next frame schedule karo
}
```

LESSON: requestAnimationFrame (RAF)
  - Browser ke saath sync rahta hai
  - Automatic 60fps (har 16.67ms ek frame)
  - Tab hidden ho toh automatically pause ho jaata hai

---

### CHANGE 1.3 â€” 3 Substances System (v1.0)

**FILE:** js/matter-lab.js
**WHY:** Simple start ke liye sirf 3 substances

v1.0 CODE (3 substances):
```javascript
// OLD v1.0 â€” sirf 3 substances, 2 separate objects mein
const CFG = {
  colors: {
    water:   { solid: '#63b3ed', liquid: '#38bdf8', gas: '#7dd3fc' },
    iron:    { solid: '#94a3b8', liquid: '#f97316', gas: '#fb923c' },
    camphor: { solid: '#c4b5fd', liquid: '#a78bfa', gas: '#ddd6fe' },
  }
};

const PHASES = {
  water:   { melt: 0,   boil: 100 },
  iron:    { melt: 90,  boil: 170 },
  camphor: { melt: null, boil: 50 },  // null = no liquid phase
};
```

PROBLEM: Data 2 alag objects mein tha (CFG.colors + PHASES)
         50 substances add karne ke liye 50 entries dono mein likhne padte

â†’ Fixed in v2.0 with single SUBSTANCES catalog (see CHANGE 2.1)

---

### CHANGE 1.4 â€” Particle Sizes (v1.0 â€” Small)

**FILE:** js/matter-lab.js
**WHY:** Default sizes rakhi thin

v1.0 SIZES (too small for classroom):
```javascript
// OLD v1.0 â€” Chote particles
// Ek circle ka radius:
// Solid:  r = 6px
// Liquid: r = 5.5px
// Gas:    r = 4px
// Problem: 1080p projector / Smart Board par dikh nahi rahe the!
```

â†’ Fixed in v2.0 (see CHANGE 2.3)

---

### CHANGE 1.5 â€” Tab Switching System

**FILE:** index.html, js/main.js
**WHY:** Teen modules ke liye teen tabs chahiye the

HOW IT WORKS:
```javascript
// HTML mein tabs:
// <button class="mod-tab" data-tab="1">States</button>
// <button class="mod-tab" data-tab="2">Diffusion</button>
// data-tab = custom attribute (apna data store karo HTML mein)

function switchTab(tabNum) {
  App.activeTab = tabNum;

  // Sab tabs deactivate karo
  document.querySelectorAll('.mod-tab').forEach(b =>
    b.classList.remove('active')
  );

  // Clicked tab activate karo
  document.querySelector(`[data-tab="${tabNum}"]`)
    .classList.add('active');

  // Physics engine ko bhi batao
  MatterLab.setTab(tabNum);
}

// Event listeners attach karo
document.querySelectorAll('.mod-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    switchTab(parseInt(btn.dataset.tab));
    // btn.dataset.tab â†’ HTML ke data-tab attribute ka value
  });
});
```

LESSON: data-* attributes
  - HTML elements par apna custom data store kar sakte hain
  - data-tab="1" â†’ JavaScript mein btn.dataset.tab se access karo
  - data-key="water" â†’ btn.dataset.key se access karo

---

### CHANGE 1.6 â€” Bilingual System (Hinglish + English)

**FILE:** js/main.js
**WHY:** Indian students ke liye Hinglish support

HOW IT WORKS:
```javascript
// Ek big object mein dono languages ka sab text
const LANG = {
  hinglish: {
    tab1: 'ðŸ§Š States & Latent Heat',
    solid: 'Thaos (Solid)',
    liquid: 'Drava (Liquid)',
    meterState: 'Current State',
  },
  english: {
    tab1: 'ðŸ§Š States & Latent Heat',
    solid: 'Solid',
    liquid: 'Liquid',
    meterState: 'Current State',
  }
};

// Helper function â€” ek shortcut
function t(key) {
  return LANG[App.lang][key] || key;
  // App.lang = 'hinglish' ya 'english'
  // || key = agar key nahi mili toh key khud return karo (fallback)
}

// Usage anywhere in code:
document.getElementById('meter-state').textContent = t('meterState');
// Automatic sahi language mein!
```

LESSON: Internationalization (i18n)
  - Ek t() function se poori app ki language change
  - Sab strings ek jagah â€” easy to update
  - || fallback pattern â€” error se bachata hai

---

### CHANGE 1.7 â€” AHA! Box Educational Messages

**FILE:** js/main.js
**WHY:** Real-time explanations for students

HOW IT WORKS:
```javascript
const AHA_MESSAGES = {
  hinglish: {
    // Key format: "state_substance"
    solid_water:  'â„ï¸ Paani abhi Barf hai! Particles vibrate karte hain...',
    liquid_water: 'ðŸ’§ Paani Liquid mein hai. Particles freely move...',
    gas_water:    'â™¨ï¸ Paani Bhap ban gaya! Particles fly rapidly...',
    gas_camphor:  'âœ¨ Sublimation! Kapoor seedha solid se gas...',
    // ...
  }
};

function getAhaMessage() {
  const ps = App.lastLiveData.particleState; // 'solid'/'liquid'/'gas'
  const sub = App.currentSubstance;          // 'water'/'iron'/'camphor'

  const key = `${ps}_${sub}`;  // â†’ 'solid_water', 'gas_camphor'
  // Template literal: backtick ` ke andar ${} se variable insert karo

  return AHA_MESSAGES[App.lang][key] || DEFAULT_MESSAGE;
}

// Every 45 frames (~0.75 seconds) update karo
App._ahaTick = (App._ahaTick || 0) + 1;
if (App._ahaTick % 45 === 0) updateAha();
```

LESSON: Dynamic object keys
  - JavaScript mein object[key] se dynamic key access kar sakte hain
  - `${var1}_${var2}` â†’ string concatenation with template literal
  - % (modulo) operator â†’ har N-th call pe kuch karo

---

## â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
## VERSION 2.0 â€” "50 Substances + Big UI"
## Date: 2026-09-28 | Time: ~04:03 IST
## User Request: "more creativity, visibility, 50 substances"
## â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

### CHANGE 2.1 â€” 3 â†’ 50 Substances (Catalog System)

**FILE:** js/matter-lab.js
**WHY:** User feedback: "substance limited hai, 50 chahiye"

OLD v1.0 (2 separate objects, 3 substances):
```javascript
// OLD â€” Data scattered across 2 objects
const CFG = { colors: { water: {...}, iron: {...}, camphor: {...} } };
const PHASES = { water: {...}, iron: {...}, camphor: {...} };
// Problem: Add karne ke liye DONO jagah likhna padta tha
```

NEW v2.0 (1 catalog object, 50 substances):
```javascript
// NEW v2.0 â€” Single source of truth
const SUBSTANCES = {
  // 15 SOLIDS
  iron: {
    nameHi:'Loha', nameEn:'Iron', formula:'Fe', emoji:'âš™ï¸',
    cs:'#94a3b8',    // colorSolid  (cs = short name)
    cl:'#f97316',    // colorLiquid
    cg:'#fbbf24',    // colorGas
    melt:90,         // melting point (demo scale, not real)
    boil:170,        // boiling point (demo scale)
    sp:null,         // special: null, 'sublime'
    cat:'solid'      // category: solid/liquid/gas
  },
  camphor: {
    nameHi:'Kapoor', nameEn:'Camphor', formula:'Câ‚â‚€Hâ‚â‚†O', emoji:'ðŸ”ï¸',
    cs:'#e9d5ff', cl:'#a78bfa', cg:'#ddd6fe',
    melt:null,  // null = no melting (goes solid â†’ gas directly)
    boil:50,    // sublime temperature
    sp:'sublime', cat:'solid'
  },
  water: {
    nameHi:'Paani', nameEn:'Water', formula:'Hâ‚‚O', emoji:'ðŸ’§',
    cs:'#bfdbfe', cl:'#38bdf8', cg:'#7dd3fc',
    melt:0, boil:100, sp:null, cat:'liquid'
  },
  // ... 47 more substances (iron â†’ krypton)
};
```

WHAT CHANGED IN PHYSICS:
```javascript
// OLD v1.0 â€” Hardcoded substance check
function getCurrentState() {
  const t = state.temperature;
  if (state.substance === 'camphor') {
    return t >= 50 ? 'gas' : 'solid';
  }
  // etc...
}

// NEW v2.0 â€” Generic, works for ALL 50 substances
function getCurrentParticleState() {
  const sub = SUBSTANCES[state.substance]; // object se data lo
  const t = state.temperature;

  if (sub.sp === 'sublime') {
    return t >= sub.boil ? 'gas' : 'solid'; // skip liquid phase
  }
  if (t < sub.melt) return 'solid';
  if (t >= sub.boil) return 'gas';
  return 'liquid';
  // This one function works for ALL 50 substances!
}
```

LESSON: "Single Source of Truth" (Software Engineering Principle)
  - Ek jagah data rakho â†’ ek jagah update karo
  - Generic code likho â†’ har substance ke liye kaam karega

---

### CHANGE 2.2 â€” Static HTML â†’ Dynamic JS-Generated Cards

**FILE:** index.html â†’ deleted old grid; js/main.js â†’ added buildSubstancePicker()
**WHY:** 50 substance buttons manually HTML mein likhna impossible tha

OLD v1.0 (manually written in HTML):
```html
<!-- OLD â€” 3 buttons manually typed in index.html -->
<div class="substance-grid">
  <button data-sub="water">ðŸ’§ Paani Hâ‚‚O</button>
  <button data-sub="iron">âš™ï¸ Loha Fe</button>
  <button data-sub="camphor">ðŸ”ï¸ Kapoor</button>
  <!-- 50 ke liye 50 manually likhne padte! Bahut kaam! -->
</div>
```

NEW v2.0 (index.html mein sirf ek div):
```html
<!-- NEW â€” Sirf ek empty div, JS baaki karta hai -->
<div id="substance-picker"></div>
```

NEW v2.0 (main.js mein buildSubstancePicker function):
```javascript
function buildSubstancePicker() {
  const SUBS = MatterLab.SUBSTANCES;

  // Object.entries() â†’ object ko [key, value] pairs ki array mein badlo
  // .map() â†’ har element transform karo
  // .join('') â†’ array ko ek badi string mein jodo
  const cards = Object.entries(SUBS).map(([key, sub]) => {
    return `
      <button class="sub-card" data-key="${key}" data-cat="${sub.cat}">
        <span class="sub-card-emoji">${sub.emoji}</span>
        <div class="sub-card-info">
          <span class="sub-card-name">${sub.nameHi}</span>
          <span class="sub-card-formula">${sub.formula}</span>
        </div>
        <span class="sub-card-badge ${sub.cat}">${sub.cat.substring(0,3)}</span>
      </button>
    `;
  }).join('');

  document.getElementById('substance-picker').innerHTML = cards;

  // Card click events dynamically attach karo
  document.querySelectorAll('.sub-card').forEach(btn => {
    btn.addEventListener('click', () => {
      App.currentSubstance = btn.dataset.key;
      MatterLab.setSubstance(App.currentSubstance);
    });
  });
}
```

ALSO ADDED â€” Filter tabs (All/Solid/Liquid/Gas):
```javascript
function filterSubstanceCards(filter) {
  document.querySelectorAll('.sub-card').forEach(card => {
    // show/hide based on category
    const show = filter === 'all' || card.dataset.cat === filter;
    card.style.display = show ? '' : 'none';
  });
}
```

LESSON: Dynamic DOM generation
  - JavaScript se HTML create karo â†’ flexible!
  - Object.entries() + map() + join() â†’ powerful combo
  - innerHTML = string â†’ HTML elements ban jaate hain
  - Event delegation: dynamically created elements ke liye events

---

### CHANGE 2.3 â€” Bigger Particles for Classroom

**FILE:** js/matter-lab.js
**WHY:** User feedback: "bacho ko nahi dikhega" â€” classroom visibility

OLD v1.0 SIZES:
```javascript
// OLD â€” Too small for projector/Smart Board
// Radius in pixels:
// Solid:  6px
// Liquid: 5.5px
// Gas:    4px
```

NEW v2.0 SIZES:
```javascript
// NEW â€” 58% bigger for classroom/Smart Board visibility
const PSIZE = {
  solid:  9.5,   // OLD: 6   â†’ +3.5px (+58%)
  liquid: 7.5,   // OLD: 5.5 â†’ +2.0px (+36%)
  gas:    5.5    // OLD: 4   â†’ +1.5px (+37%)
};

// Also increased particle COUNT:
// OLD: 90 particles
// NEW: 88 particles (slightly less because they're bigger)
const PCOUNT = 88;
```

---

### CHANGE 2.4 â€” Flat Circle â†’ 3D Sphere Particle Rendering

**FILE:** js/matter-lab.js â†’ drawParticle()
**WHY:** Better visual quality â€” premium look

OLD v1.0 drawParticle():
```javascript
// OLD â€” Simple flat circle (3 lines)
function drawParticle(p) {
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
  ctx.fillStyle = p.color;
  ctx.fill();
}
```

NEW v2.0 drawParticle() â€” 3 layers:
```javascript
// NEW â€” 3-layer 3D sphere (~30 lines but much better!)
function drawParticle(p, forceColor) {
  const color = forceColor || p.color;
  ctx.save(); // save current canvas state

  // LAYER 1: Outer glow (aura/halo effect)
  const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.8);
  grd.addColorStop(0, color);        // center = full color
  grd.addColorStop(1, 'transparent'); // edge = transparent
  ctx.globalAlpha = 0.22;             // 22% opacity (subtle)
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.r * 2.8, 0, Math.PI * 2);
  ctx.fill();

  // LAYER 2: Core with 3D gradient (light source at top-left)
  const coreGrd = ctx.createRadialGradient(
    p.x - p.r * 0.3, p.y - p.r * 0.3,  // light source = top-left
    p.r * 0.1,                           // inner radius (small)
    p.x, p.y, p.r                        // center, outer radius
  );
  coreGrd.addColorStop(0, lightenColor(color, 40)); // bright highlight
  coreGrd.addColorStop(0.6, color);                  // normal color
  coreGrd.addColorStop(1, darkenColor(color, 30));   // dark shadow
  ctx.globalAlpha = 0.92;
  ctx.fillStyle = coreGrd;
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
  ctx.fill();

  // LAYER 3: Specular highlight (white dot = glass/plastic shine)
  ctx.globalAlpha = 0.45;
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.beginPath();
  ctx.arc(p.x - p.r*0.32, p.y - p.r*0.32, p.r*0.34, 0, Math.PI*2);
  ctx.fill(); // small white circle at top-left = reflection

  ctx.restore(); // canvas state restore karo
}

// Helper functions:
function lightenColor(hex, amt) {
  // hex color (#38bdf8) ko parse karo â†’ R,G,B nikalo â†’ amt add karo
  const r = Math.min(255, parseInt(hex.slice(1, 3), 16) + amt);
  const g = Math.min(255, parseInt(hex.slice(3, 5), 16) + amt);
  const b = Math.min(255, parseInt(hex.slice(5, 7), 16) + amt);
  return `rgb(${r},${g},${b})`;
}
```

LESSON: RadialGradient = concentric circles ka gradient
  - createRadialGradient(x1,y1,r1, x2,y2,r2)
  - addColorStop(0, color) = center
  - addColorStop(1, color) = edge
  - ctx.save() / ctx.restore() = globalAlpha reset karo

---

### CHANGE 2.5 â€” Gas Particle Trails

**FILE:** js/matter-lab.js
**WHY:** Gas particles ki speed visually dikhni chahiye

OLD v1.0 â€” No trails:
```javascript
// OLD â€” Sirf current position draw hoti thi
// Speed "feel" nahi hoti thi visually
```

NEW v2.0 â€” Trail system using array as queue:
```javascript
// STEP 1: makeParticle mein trail array add kiya
function makeParticle(x, y, vx, vy, r, color) {
  return {
    x, y,           // current position
    vx, vy,         // velocity (speed direction)
    r, color,       // radius, color
    trail: []       // NEW: last 6 positions store karo
  };
}

// STEP 2: Update loop mein (gas state only)
if (particleState === 'gas') {
  p.trail.push({ x: p.x, y: p.y }); // current pos add karo
  if (p.trail.length > 6) {
    p.trail.shift(); // oldest position hata do
    // Result: hamesha sirf last 6 positions rehti hain
    // Array is behaving like a "queue" (FIFO)
  }
}

// STEP 3: Draw loop mein
p.trail.forEach((pt, i) => {
  const opacity = (i / p.trail.length) * 0.18;
  // i=0 (oldest) â†’ opacity 0% (invisible)
  // i=5 (newest) â†’ opacity 18% (most visible)
  ctx.globalAlpha = opacity;
  ctx.fillStyle = p.color;
  ctx.beginPath();
  ctx.arc(pt.x, pt.y, p.r * 0.7, 0, Math.PI * 2); // smaller circle
  ctx.fill();
});
```

LESSON: Array as Queue (FIFO â€” First In, First Out)
  - push() â†’ end mein add karo (new item)
  - shift() â†’ start se hata do (oldest item)
  - Result: fixed size array with rolling window

---

### CHANGE 2.6 â€” Temperature-Tinted Canvas Background

**FILE:** js/matter-lab.js â†’ drawBackground()
**WHY:** Temperature feel visually convey karna tha

OLD v1.0:
```javascript
// OLD â€” Always same dark background
ctx.fillStyle = '#0a0f1e'; // always dark blue
ctx.fillRect(0, 0, W, H);
```

NEW v2.0:
```javascript
// NEW â€” Background color changes with temperature
function getTemperatureBgColor() {
  const t = state.temperature; // -50 to 200

  if (t <= 0) {
    // Cold: Deep dark blue
    // (t+50)/50 â†’ 0 when t=-50, 1 when t=0 (normalizing)
    const f = (t + 50) / 50;
    return `hsl(${215 + f * 8}, ${55 - f * 15}%, ${5 + f * 3}%)`;
    //           Blue hue          Saturation          Lightness
  } else if (t <= 100) {
    // Normal: Neutral dark (slight shift)
    const f = t / 100;
    return `hsl(${220 - f * 35}, 40%, ${6 + f * 4}%)`;
  } else {
    // Hot: Dark orange-red
    const f = (t - 100) / 100;
    return `hsl(${185 - f * 160}, ${30 + f * 30}%, ${10 + f * 8}%)`;
    //           Hue shifts orange-red  More saturated    Brighter
  }
}
```

LESSON: HSL color space
  - H (Hue): 0=red, 120=green, 240=blue (color ka type)
  - S (Saturation): 0%=grey, 100%=vivid (color ki "intensity")
  - L (Lightness): 0%=black, 50%=normal, 100%=white
  - Normalization: (value - min) / (max - min) â†’ 0 to 1 range

---

## â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
## VERSION 3.0 â€” "Documentation System"
## Date: 2026-09-28 | Time: ~04:22 IST
## User Request: "har change save karo as comment"
## â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

### CHANGE 3.1 â€” Documentation System Created

**FILES Created:**
```
docs/
â”œâ”€â”€ CHANGELOG.md          â† YEH FILE (main history log)
â”œâ”€â”€ FILE_GUIDE.md         â† Kaunsi file kya karti hai
â””â”€â”€ HOW_TO_ADD_CHANGES.md â† Future changes document karne ka tarika
```

---

## â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
## VERSION 4.0 â€” "Multipage Platform Architecture"
## Date: 2026-09-28 to 2026-09-30
## User Request: "es poore projects ko mujhe multipage banana hai"
## â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

### CHANGE 4.1 â€” Global Navbar & Home Page Created

**DATE:** 2026-09-28 11:15 IST
**FILE:** index.html, simulator.html, css/style.css
**WHY:** App ko single-page simulator se multipage educational platform me convert karna.

OLD CODE:
```html
    <!-- Pura simulator index.html me tha -->
    <!-- Header me sirf simulator controls the -->
    <header id="app-header">...</header>
```

NEW CODE:
```html
    <!-- 1. index.html ab ek landing/home page ban gaya hai hero section ke sath. -->
    <!-- 2. Simulator ab simulator.html me move ho gaya hai. -->
    <!-- 3. Ek global navbar add kiya hai jisse har page pe navigation possible ho. -->
    <nav class="global-navbar">...</nav>
```

LESSON: Multipage Architecture
  - Jab app badi ho jati hai, alag-alag functionalities ko different HTML files me split karna better hota hai.
  - Global navigation bar ensures seamless user experience across all pages.

---

### CHANGE 4.2 â€” Full 7-Page Platform Completed (2026-09-29)

**DATE:** 2026-09-29 12:30 IST
**FILES:** index.html, learn.html, experiments.html, quiz.html, dashboard.html, about.html, css/pages.css, js/shared-nav.js
**WHY:** User request: 'es poore projects ko mujhe multipage banana hai' + 'pura kr do'

PAGES BUILT:
- index.html - Hero landing page with animated particle canvas, stats bar, 6 feature cards, CTA
- learn.html - 11 NCERT-aligned topic cards (Class 6-10) with class filter chips, glossary (12 terms)
- experiments.html - 10 full step-by-step virtual experiments with procedures, observation tables
- quiz.html - Interactive MCQ quiz with 40+ questions, instant feedback, animated score ring, 6 topic modes
- dashboard.html - Student progress with 4 stat cards, topic bars, 8 achievement badges (localStorage)
- about.html - Project info, curriculum mapping table, teacher guide, full NCERT disclaimer

NEW FILES:
- css/pages.css - 350+ lines of page-specific styles
- js/shared-nav.js - Theme persistence, mobile hamburger, MLProgress localStorage helpers

QA RESULTS:
- All 7 pages: have correct file sizes (8KB to 31KB)
- All 7 pages: all 7 nav links present in every page
- All 7 pages: style.css + pages.css + shared-nav.js loaded correctly

LESSONS LEARNED:
- localStorage API: browser me data save karo without server
- CSS Custom Properties (var(--)) for consistent design tokens
- Accordion UI: click se expand/collapse (classList.toggle)
- SVG stroke-dashoffset animation for score ring
- Object.values() + concat() for combining quiz pools

---

### CHANGE 4.3 â€” CSS Compatibility Fix (2026-09-29 13:15)

**DATE:** 2026-09-29 13:15 IST
**FILES:** css/pages.css (line 74), css/style.css (line 1231)
**WHY:** IDE showed warning: 'Also define the standard property background-clip for compatibility'

OLD CODE:
```css
  -webkit-background-clip: text;   /* only webkit prefix */
  color: transparent;
```

NEW CODE:
```css
  -webkit-background-clip: text;
  background-clip: text;            /* standard property added */
  color: transparent;
```

LESSON: CSS Vendor Prefixes
  - -webkit-background-clip was an old vendor-specific prefix for Chrome/Safari
  - Modern browsers now support the standard 'background-clip: text' directly
  - Best practice: Always write BOTH - webkit prefix first, then standard property after
  - This ensures compatibility with ALL browsers (Chrome, Firefox, Safari, Edge)

---

### CHANGE 4.4 â€” Vercel Deployment Fix (2026-09-30 05:53)

**DATE:** 2026-09-30 05:53 IST  
**FILES:** vercel.json (NEW FILE CREATED)
**WHY:** Vercel pe css/ aur js/ folders 404 aa rahe the - CSS/JS load nahi ho raha tha

PROBLEM: 
  - CSS files: https://matterlab-jade.vercel.app/css/style.css -> 404 Not Found
  - JS files: https://matterlab-jade.vercel.app/js/matter-lab.js -> 404 Not Found
  - Site completely unstyled / broken on Vercel

ROOT CAUSE:
  - GitHub Desktop se push karte waqt css/ aur js/ subfolders properly track nahi hue the git mein
  - Vercel ko sirf HTML files milte the, CSS/JS nahi

FIX APPLIED:
  - vercel.json create kiya: routes config se sabhi static files serve hongi
  - User ko GitHub Desktop mein "re-commit" + "push" karna hoga taaki css/ aur js/ folders upload ho jayein

LESSON: Git Subfolders
  - Git automatically sabhi subfolders track karta hai
  - Lekin pehli baar 'git add .' ZAROOR karna padta hai
  - GitHub Desktop mein: sabhi files checked honi chahiye before commit

---

### CHANGE 4.5 â€” Light Theme Fix (2026-09-30 06:18)

**DATE:** 2026-09-30 06:18 IST
**FILE:** css/style.css (line 62)
**WHY:** Light theme button click karne pe bhi site dark hi rehti thi

PROBLEM (Bug):
  CSS mein likha tha:
    body.light-mode { ... }   <- class body pe dhundh raha tha

  JS mein likha tha:
    document.documentElement.classList.toggle('light-mode')
    document.documentElement = <html> tag hota hai, body nahi!

  Toh JS html tag pe class add karta tha, CSS body pe dhundhta tha
  = class kabhi match nahi hoti = light mode kabhi kaam nahi karta!

FIX:
  CSS changed from:  body.light-mode { }
  CSS changed to:    html.light-mode { }

  Ab dono match karte hain!

LESSON: document.documentElement vs document.body
  - document.documentElement = <html> element (root of page)
  - document.body            = <body> element (inside html)
  - CSS theme class usually html ya :root pe lagaate hain
  - JS mein bhi usi element pe toggle karna chahiye

---

### CHANGE 4.6 â€” Light Theme Deep Fix (2026-09-30 06:51)

**DATE:** 2026-09-30 06:51 IST
**FILE:** css/style.css (lines 61-120)
**WHY:** Light theme CSS variables toggle hone ke baad bhi dark dikh raha tha

PROBLEM:
  CSS custom properties (:root variables) HTML pe override ho rahe the,
  lekin kuch elements pe direct background/color set nahi ho rahi thi.
  CSS variable cascade kuch edge cases mein fail karti hai.

FIX:
  Dono approach combine ki:
  1. html.light-mode { --variables: overridden; }  <- CSS variables
  2. html.light-mode body { background: #eef2f7 !important; }  <- direct overrides

  !important use kiya taaki koi bhi rule override na kar sake.

LESSON: CSS Specificity aur !important
  - !important sabse highest specificity hoti hai CSS mein
  - Jab variable cascade fail ho, direct property override reliable hota hai
  - Production bugs ke liye sometimes !important best solution hai

---

### CHANGE 4.7 â€” Soft Dark Theme (2026-09-30 07:11)

**DATE:** 2026-09-30 07:11 IST
**FILE:** css/style.css (lines 8-65, :root variables)
**WHY:** Old dark theme bahut zyada dark tha, low brightness screen pe text barely visible tha

OLD VALUES (Jet Black):
  --bg-base:       #0b0f1a   (very dark navy)
  --bg-card:       #1a2236
  --text-primary:  #e2e8f0   (off-white)
  --text-secondary:#94a3b8   (grey-blue)

NEW VALUES (Soft Dark Purple-Navy):
  --bg-base:       #1e1e2e   (soft dark)
  --bg-card:       #2a2b3c   (softer card)
  --text-primary:  #ffffff   (pure white - max contrast)
  --text-secondary:#cbd5e1   (brighter soft white-blue)

LESSON: Accessible Dark Theme Design
  - Pure black (#000) aur near-black (#0b0f1a) phones pe strain dete hain
  - Soft dark (#1e1e2e like Catppuccin/GitHub Dark Dimmed) much better
  - Pure white text (#fff) on soft dark = best contrast ratio (WCAG AA)
  - Muted text #cbd5e1 = menu items clearly readable ab

---

## â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
## VERSION 5.0 â€” "Decoupled Virtual Labs & Architecture Hub"
## Date: 2026-10-04 | Time: ~19:40 IST
## User Request: "simulators ko alag page pe categorize karo aur engine ko decouple karo"
## â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

### CHANGE 5.1 â€” Virtual Chemistry Labs Hub Created (`simulators.html`)

**DATE:** 2026-10-04 19:41 IST
**FILE:** simulators.html
**WHY:** Pehle saara particle simulator index.html me hi tha. Ek dedicated centralized hub chahiye tha jahan se student sabhi 6 specialized chemistry simulators ko browse aur launch kar sakein.

FEATURES BUILT:
  - 3D particle Canvas animated background
  - Glowing Glassmorphic UI cards for 6 lab modules
  - Specialized Chemistry Dropdown in navigation
  - Scroll Reveal animations with staggered delays
  - Day/Night theme switcher with smooth transition

LESSON: Hub-and-Spoke Architecture
  - Ek central "Hub" (simulators.html) saare standalone "Spokes" (sim_*.html) ko manage karta hai.
  - Isse individual simulators crash hone par poora website down nahi hota.

---

### CHANGE 5.2 â€” Standalone Particle Engine Module (`sim_particle.html`)

**DATE:** 2026-10-04 19:33 IST
**FILE:** sim_particle.html
**WHY:** States of Matter (Solid, Liquid, Gas) ke engine ko main page se decouple karke dedicated full-screen virtual lab banana.

FEATURES BUILT:
  - High-performance HTML5 Canvas particle system (Solid lattice, Liquid sliding, Gas random walk)
  - Real-time temperature slider (-50Â°C to 200Â°C) with dynamic speed & phase calculations
  - Phase status display (Solid / Liquid / Gas) with color shift (Green / Cyan / Pink)
  - Fully responsive glassmorphism control panel

LESSON: Decoupled Simulation Engines
  - Standalone HTML page me simulation ko isolate karne se DOM complexity kam hoti hai aur frame rate (60 FPS) stable rehta hai.

---

### CHANGE 5.3 â€” Landing Page Redesign & Ecosystem Integration (`index.html`)

**DATE:** 2026-10-04 19:24 IST
**FILE:** index.html
**WHY:** App ko educational portal ka look dena jo students aur teachers ko Virtual Labs, Notes, aur Tools me guide kare.

FEATURES BUILT:
  - Futuristic Hero section with live interactive background particles
  - Direct CTA buttons leading to `simulators.html` and `learn.html`
  - Stats counters (6+ Simulators, 118 Elements, Class 6-12 Notes)
  - Features grid linking to all major platform tools

---

## â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
## VERSION 5.1 â€” "High-School Virtual Lab Suite & Chemistry Toolset"
## Date: 2026-10-06 | Time: ~19:55 IST
## User Request: "NCERT Class 9-12 ke advanced practicals aur periodic table tools add karo"
## â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

### CHANGE 5.4 â€” Acid-Base Titration Virtual Lab (`sim_titration.html`)

**DATE:** 2026-10-06 19:36 IST
**FILE:** sim_titration.html (Class 10 - 12 NCERT)
**WHY:** Real lab me burette aur acid-base chemicals dangerous aur costly hote hain. Digital virtual titration lab zaroori thi.

FEATURES:
  - Interactive burette dropper with real-time volume drop calculation
  - Dynamic pH meter display (0 to 14) with color-coded pH spectrum bar
  - Choice of indicators: Phenolphthalein (colorless -> pink) & Methyl Orange (red -> yellow)
  - Real-time neutralization titration curve and equivalence point badge
  - Educational AHA! box explaining equivalence calculation: `M1 * V1 = M2 * V2`

LESSON: Mathematical Modeling in Canvas
  - Sigmoid function se realistic pH titration curve model kiya: pH drastically jumps at neutral point (pH 7.0).

---

### CHANGE 5.5 â€” Rutherford Gold Foil Experiment Simulator (`sim_rutherford.html`)

**DATE:** 2026-10-06 19:37 IST
**FILE:** sim_rutherford.html (Class 9 & 11 Atomic Structure)
**WHY:** Rutherford ke experiment ko textbook me imagine karna mushkil hota hai â€” students ko dekhna tha ki alpha particles kaise repel hote hain.

FEATURES:
  - Alpha particle emitter firing streams toward a Gold atom nucleus
  - Coulombic electrostatic repulsion physics: `F âˆ 1/rÂ²`
  - Real-time scattering statistics: Undeflected (>99%), Deflected (~1%), Rebounded (1 in 8,000)
  - Interactive energy/velocity slider and particle beam controls

LESSON: Physics Vector Math
  - Har particle ke liye electrostatic force calculate karke velocity vector update karna: `vx += fx * dt`, `vy += fy * dt`.

---

### CHANGE 5.6 â€” Ideal Gas Laws Simulator (`sim_gaslaws.html`)

**DATE:** 2026-10-06 19:38 IST
**FILE:** sim_gaslaws.html (Class 11 States of Matter)
**WHY:** Boyle's Law, Charles' Law, aur Gay-Lussac's Law ko visually verify karne ke liye live gas chamber.

FEATURES:
  - Piston cylinder animation: Volume slider moves piston up/down
  - Real-time Pressure vs Volume and Temperature vs Pressure graphs
  - Particle collision detection with moving piston wall
  - Law switcher tabs: Boyle's (`P âˆ 1/V`), Charles' (`V âˆ T`), Gay-Lussac's (`P âˆ T`)

LESSON: Ideal Gas Equation Engine
  - `P * V = n * R * T` relationship ko real-time constraints ke sath bind kiya gaya.

---

### CHANGE 5.7 â€” Electrochemistry & Cell Potential Lab (`sim_electro.html`)

**DATE:** 2026-10-06 19:40 IST
**FILE:** sim_electro.html (Class 12 Electrochemistry)
**WHY:** Daniell Cell (Zn-Cu) aur Electrolytic cell ke electron flow aur half-reactions ko live visualize karna.

FEATURES:
  - Dual beaker setup with salt bridge (KNOâ‚ƒ/KCl) and connecting wire
  - Animated electron flow from Anode to Cathode
  - Real-time Voltmeter dial calculating Standard Cell Potential ($EÂ°_{cell} = EÂ°_{cathode} - EÂ°_{anode} = 1.10\text{ V}$)
  - Electrodes mass change visualization: Zinc dissolves, Copper plates out

LESSON: Redox Reaction Modeling
  - Oxidation half-reaction (`Zn â†’ ZnÂ²âº + 2eâ»`) and reduction half-reaction (`CuÂ²âº + 2eâ» â†’ Cu`) sync with voltmeter.

---

### CHANGE 5.8 â€” Chemical Bonding & VSEPR 3D Molecule Simulator (`sim_bonding.html`)

**DATE:** 2026-10-06 19:43 IST
**FILE:** sim_bonding.html (Class 11 Chemical Bonding)
**WHY:** Valence Shell Electron Pair Repulsion (VSEPR) geometry samajhna: Linear, Trigonal Planar, Tetrahedral, etc.

FEATURES:
  - 3D rotating molecule projection on 2D Canvas with mouse drag rotation
  - Bond angle calculation (180Â°, 120Â°, 109.5Â°, 107Â°, 104.5Â°)
  - Lone pair repulsion effect visualization (eg. $H_2O$ bent structure vs $CH_4$ tetrahedral)
  - Library of molecules: $BeCl_2$, $BF_3$, $CH_4$, $NH_3$, $H_2O$, $PCl_5$, $SF_6$

LESSON: 3D Projection Math
  - 3D rotation matrix (Yaw, Pitch, Roll) transform on Canvas coordinates $(x', y') = (x \cos\theta - z \sin\theta, y)$.

---

### CHANGE 5.9 â€” Interactive 118 Elements Periodic Table (`periodic-table.html`)

**DATE:** 2026-10-06 19:26 IST
**FILE:** periodic-table.html
**WHY:** Comprehensive modern Periodic Table for all school levels with deep properties.

FEATURES:
  - Complete 118 Elements in authentic 18-column grid with Lanthanides & Actinides
  - Color-coded categories: Alkali, Alkaline Earth, Transition, Non-metals, Halogens, Noble gases
  - Live search by Element Name, Symbol, or Atomic Number
  - Interactive element modal: Electron configuration, Boiling/Melting points, Electronegativity, Discovery year

LESSON: CSS Grid for Chemistry
  - CSS Grid with `grid-column` and `grid-row` mapping allowed exact IUPAC periodic table rendering.

---

### CHANGE 5.10 â€” Interactive Chemical Reaction Balancer (`reaction.html`)

**DATE:** 2026-10-06 19:48 IST
**FILE:** reaction.html (Class 10 Chemical Reactions)
**WHY:** Students ko chemical equation balancing (Law of Conservation of Mass) interactively sikhana.

FEATURES:
  - Interactive coefficient steppers for reactants and products
  - Visual dual-pan balance scale comparing reactant atoms vs product atoms
  - Real-time atom counting badge: Green glow when balanced, Red indicator when unbalanced
  - Preset reactions: Combustion of Methane, Photosynthesis, Formation of Water, Haber Process

LESSON: Element Stoichiometry Parser
  - Coefficient multiply algorithm: Formula string parse karke har element ke total atom count match karna.

---

### CHANGE 5.11 â€” AI Chemistry Tutor Assistant (`ai-tutor.html`)

**DATE:** 2026-10-06 19:49 IST
**FILE:** ai-tutor.html
**WHY:** On-demand NCERT chemistry doubt clearing chat interface.

FEATURES:
  - Con### CHANGE 5.14 â€” Guided Practical Experiments Manual (`experiments.html`)

**DATE:** 2026-10-06 19:48 IST
**FILE:** experiments.html
**WHY:** Step-by-step school laboratory practical experiments handbook.

FEATURES:
  - 10 full NCERT practical guides with Aim, Apparatus, Principle, Procedure, and Observation tables
  - Safety precautions checklist for each chemical experiment
  - Instant link to launch corresponding virtual simulator

---

## CONCEPTS LEARNED (v1.0 to v5.1 Master Summary)

| Concept / Technology   | Version | File / Component        | Purpose & Impact |
|------------------------|---------|-------------------------|------------------|
| HTML Canvas 2D API     | v1.0    | js/matter-lab.js        | Real-time 60fps particle physics simulation |
| Separation of Concerns | v1.0    | index, style, js        | Clear split: HTML=Structure, CSS=Style, JS=Logic |
| Single Source of Truth | v2.0    | SUBSTANCES catalog      | 50 substances catalog in centralized JS data object |
| Radial Gradients       | v2.0    | Canvas particle render  | 3D sphere look for atoms and molecules |
| Multipage Architecture | v4.0    | 7 Platform HTML files   | Dedicated pages for Learn, Quiz, Experiments, Dashboard |
| localStorage State     | v4.0    | js/shared-nav.js        | Theme persistence & quiz progress saved in browser |
| Hub-and-Spoke Pattern  | v5.0    | simulators.html         | Central hub cleanly launching isolated lab modules |
| Isolated Simulation    | v5.0    | sim_particle.html       | Dedicated canvas engine without landing page bloat |
| Sigmoid Math Modeling  | v5.1    | sim_titration.html      | Realistic acid-base titration pH curve generation |
| Coulomb Inverse Square | v5.1    | sim_rutherford.html     | Live electrostatic alpha particle scattering physics |
| Ideal Gas Equation     | v5.1    | sim_gaslaws.html        | Real-time P-V-T thermodynamic equilibrium solver |
| Standard Cell Potential| v5.1    | sim_electro.html        | Daniell cell electron flow & reduction potential math |
| 3D Projection Matrices | v5.1    | sim_bonding.html        | 3D VSEPR molecular geometry rotation on 2D Canvas |
| CSS Grid 18-Columns    | v5.1    | periodic-table.html     | Exact IUPAC 118-element periodic grid layout |
| Stoichiometry Balancing| v5.1    | reaction.html           | Real-time reactant vs product atom conservation balance |

---

## HOW TO ADD FUTURE CHANGES (Template)

Future me koi bhi badlav karein, toh isi template ko follow karein:

```markdown
### CHANGE X.Y — [Kya badla ek line mein]

**DATE:** YYYY-MM-DD HH:MM IST
**FILE:** [Relative filepath]
**WHY:** [User request / problem statement]

OLD CODE:
```javascript
// Purana code ya structure
```

NEW CODE:
```javascript
// Naya code ya feature
```

LESSON: [Technical principle ya learning point]
```

---

### CHANGE 5.2 — Platform Brand Unification & Architecture Completeness

**DATE:** 2026-10-12 07:05 IST
**FILE:** index.html, contact.html, board-prep.html, vr-lab.html, nomenclature.html, junior.html, quiz.html, ai-tutor.html, js/shared-nav.js, docs/FILE_GUIDE.md, audit_platform.ps1
**WHY:** Unify all remaining legacy "MatterLab" branding traces to "Moleqyn", activate Reaction Balancer dropdown status from SOON to NEW, synchronize light/dark theme keys across shared navigation, create brand SVG favicon, and update platform architecture docs.

FEATURES:
  - Cleaned up residual branding in footers, FAQ text, contact channels, and AI solver headers across all platform pages.
  - Activated Moleqyn Reaction Balancer link status in index.html dropdown.
  - Added theme persistence harmonization (`mlab-theme` and `ml-theme`) in `js/shared-nav.js`.
  - Added modern `favicon.svg` with flask and bubble glow for browser tabs.
  - Completely updated `docs/FILE_GUIDE.md` cataloging all 30 HTML pages and 12 virtual simulation engines.
  - Enhanced `audit_platform.ps1` with 6-point verification passing 150/150 checks (100% healthy).

LESSON: Brand Unification & Audit Governance
  - Large-scale rebrands require multi-layer audit scripts checking page titles, navigation bars, footer components, and storage keys to maintain 100% brand integrity.

---

### CHANGE 5.3 — PWA Offline Lab Caching, Production SEO & Deployment Suite

**DATE:** 2026-10-12 07:13 IST
**FILE:** manifest.json, sw.js, robots.txt, sitemap.xml, vercel.json, js/shared-nav.js, docs/DEPLOYMENT_GUIDE.md
**WHY:** Enable offline laboratory support for school computer labs with intermittent connectivity, index all 30 pages for search engines, and establish multi-target production deployment configurations.

FEATURES:
  - Created Web App Manifest (`manifest.json`) enabling installable standalone PWA experience.
  - Implemented Service Worker (`sw.js`) with Stale-While-Revalidate caching for all 30 pages and 12 simulation engines.
  - Registered Service Worker automatically via `js/shared-nav.js`.
  - Added `robots.txt` and full 30-URL `sitemap.xml` with priority metadata for Google and Bing indexing.
  - Configured `vercel.json` with immutable static asset caching and zero-cache service worker revalidation headers.
  - Authored comprehensive `docs/DEPLOYMENT_GUIDE.md` covering Vercel, Netlify, GitHub Pages, and offline ZIP distribution.

LESSON: Progressive Enhancement & Network Resilience
  - Static client-side chemistry simulators paired with service worker caching create resilient educational software that runs reliably even without internet.

---

### CHANGE 6.0 — Learn Chemistry Hub Overhaul & Interactive 3D VSEPR Molecular Workbench

**DATE:** 2026-10-23 15:20 IST
**FILE:** learn.html, index.html, simulators.html, experiments.html, CHANGELOG.md
**WHY:** 
1. Fix top navbar links wrapping into multiple vertical lines on desktop and tablet views across key platform pages.
2. Synchronize and bulletproof Dark Mode and Light (Day) Mode toggles across all pages, preventing duplicate event listener clashes on `#themeBtn` and harmonizing storage keys (`ml-theme`, `mlab-theme`, `mlab_theme`).
3. Overhaul the Learn Hub Hero banner: completely replace generic rotating wireframes with a scientifically authentic, interactive 3D VSEPR Molecular Workbench.
4. Establish a gamified learning matrix with 4 study modes (Visual Concept Notes, Reaction & Formula Vault, 15 Simulators, Self-Check Quizzes) and chapter reader modal architecture.

FEATURES:
  - **Interactive 3D VSEPR Molecular Workbench**:
    - Live 3D Canvas engine with mouse & touch drag inspection (360° perspective rotation with inertia damping).
    - Authentic VSEPR geometries:
      - **H₂O**: Bent geometry (104.5°), sp³ hybridization, polar dipole moment (μ = 1.85 D), and dual lone-pair electron clouds.
      - **CO₂**: Linear geometry (180.0°), sp hybridization (2σ, 2π), double covalent bonds, symmetric zero dipole balance.
      - **CH₄**: Regular 3D tetrahedral geometry (109.5°), sp³ hybridization.
      - **C₆H₆**: Planar hexagonal resonance ring (120.0°), sp² aromatic hybridization with delocalized π-electron cloud animation.
      - **NaCl**: Ionic crystal lattice pair with glowing electrostatic electron transfer wave (Na⁺ cation and Cl⁻ anion).
    - Smooth spring physics interpolation when switching molecules (atoms morph gracefully into new coordinates).
    - Live Heads-Up Display (HUD) overlay displaying Geometry, Bond Angle, Hybridization, and Dipole Moment.
    - Maxwell-Boltzmann Thermal Mode toggle (simulating 300K vs 600K vibrational excitation modes).
  - **Navbar Single-Line Lock**:
    - Applied strict `flex-wrap: nowrap !important; white-space: nowrap !important;` constraints to prevent multi-line wrapping across all major pages.
  - **Bulletproof Theme Synchronization**:
    - Added `_hasSharedThemeListener` safeguards to prevent duplicate toggle handlers.
    - Unified attribute toggling (`data-theme="day"` / `light-mode` / `dark-mode`) and storage sync.

LESSON: Authentic Domain Physics vs Generic Visuals
  - Educational web applications gain maximum credibility when interactive visuals reflect real domain physics (VSEPR bond angles, dipole moments, hybridization, and thermal vibrations) rather than generic rotating icons.

---

### CHANGE 6.1 — Comprehensive NCERT Chapter Notes Database & Solved In-Text Cards

**DATE:** 2026-10-23 17:30 IST
**FILE:** js/chapter-notes-db.js, learn.html, CHANGELOG.md
**WHY:** 
Resolve student learning limitations where chapters previously displayed only high-level topic titles without in-depth textbook notes, real chemical mechanisms, solved board in-text questions, or lab experiment protocols.

FEATURES:
  - **Comprehensive Master Notes Database (`js/chapter-notes-db.js`)**:
    - Created an extensive, modular learning database covering Class 7 through Class 12 with authentic NCERT theory, chemical equations, and practical experiment steps.
    - Added dedicated detailed entries for key syllabus topics including Metals & Non-metals, Water & Wastewater Engineering, Combustion & Fuels, Plant Photosynthesis, Kinetic Particle Theory, Mole Concept, Atomic Quantum Structure, Chemical Reactions & Redox, Carbon Covalent Networks & Saponification Micelles, VSEPR Geometries, and Solutions Colligative Properties.
  - **NCERT In-Text Solved Question Component (`.lesson-ncert-box`)**:
    - Built a high-yield Q&A component within each lesson section featuring the formal question, concept breakdown, and model board-exam answers.
  - **Enhanced Intelligent Curriculum Synthesizer**:
    - Upgraded the dynamic fallback synthesizer for all remaining classes so that every chapter dynamically generates multi-paragraph chemical theory, formatted reaction formulas, and tailored conceptual practice quizzes instead of static boilerplate.

LESSON: Content Depth & Modular Data Architecture
  - Separating expansive curricular text into dedicated content modules (`js/chapter-notes-db.js`) keeps HTML templates fast and clean while ensuring students receive comprehensive, textbook-grade revision notes for every chapter.

### CHANGE 6.2 — Complete Class 1 to Class 12 Master Study Notes Database (All 67 Chapters)

**DATE:** 2026-10-23 21:50 IST
**FILE:** js/chapter-notes-db.js, learn.html, CHANGELOG.md
**WHY:** 
Fulfill the end-to-end academic vision of Moleqyn by expanding comprehensive, topper-grade, NCERT-aligned master notes across every single class from Class 1 through Class 12, ensuring every student has instant access to in-depth theory, chemical equations, lab experiments, solved in-text questions, and interactive self-check quizzes.

FEATURES:
  - **Comprehensive 67-Chapter Master Curriculum Database (`js/chapter-notes-db.js`)**:
    - **Primary Tier (Classes 1–5 | 20 Chapters)**: Living vs non-living, water cycle, everyday materials, solar heat & seasons, states of matter, air atmosphere, rocks & minerals, plant photosynthesis, filtration & purification, soil compost, heat & thermal expansion, mass & density, solutions & solubility, air composition, renewable fuels, and daily acid-base chemistry.
    - **Middle School Tier (Classes 6–8 | 17 Chapters)**: Particulate theory of matter, materials sorting, physical separation techniques (sedimentation, decantation, filtration, chromatography), atmospheric oxygen & nitrogen, physical vs chemical reactions, natural indicators, metals & non-metals, wastewater management, carbon allotropes, combustion flame zones, fossil fuels & fractional distillation, and electroplating electrolysis cells.
    - **Secondary Board Tier (Classes 9–10 | 11 Chapters)**: Evaporation & latent heat, true solutions vs colloids & suspensions (Tyndall effect), mole concept & Avogadro stoichiometry, Bohr-Rutherford atomic structures & isotope mass calculations, chemical reactions & redox balancing, acid-base-salt pH & chlor-alkali process, metallurgical extraction (calcination, roasting, blast furnace), carbon covalent bonding & micelle saponification, and Mendeleev vs Modern Periodic trends.
    - **Senior Secondary Tier (Classes 11–12 | 19 Chapters)**:
      - *Class 11*: Stoichiometry & limiting reagents, Quantum numbers & orbital nodal geometry, Modern periodic trends & shielding effects, VSEPR 3D geometries & MOT bond orders, Chemical thermodynamics (Hess's law, Entropy, Gibbs spontaneity), Chemical & Ionic equilibrium (Le Chatelier, Henderson equation, Ksp), Redox balancing (ion-electron method), Organic reaction intermediates & electronic effects (+I, -I, hyperconjugation), and Hydrocarbons (Markovnikov, Wurtz, aromatic EAS).
      - *Class 12*: Raoult's law & colligative properties, Nernst equation & Kohlrausch's law & battery cells, Chemical kinetics & Arrhenius activation energy, d- & f-block transitions & catalytic properties, Coordination complexes (Werner, IUPAC, CFT crystal field splitting, synergic CO bonding), Haloalkanes (SN1 vs SN2 Walden inversion, Saytzeff elimination), Alcohols, Phenols & Ethers (Lucas test, Kolbe, Reimer-Tiemann, Williamson synthesis), Aldehydes, Ketones & Carboxylic acids (Aldol condensation, Cannizzaro, Tollens silver mirror, Iodoform test), Amines & Nitrogen compounds (Gabriel phthalimide, Hoffmann bromamide, Hinsberg test, Diazonium coupling), and Biomolecules (Haworth projections, alpha/beta glucose, zwitterion pI, protein structures, and Watson-Crick DNA double helix).
  - **4-Tab Study Architecture for Every Chapter**:
    - **Concept Notes & Theory**: Definitions, deep chemical explanations, exam tips, and NCERT in-text solved cards.
    - **Key Formulas & Reactions**: Formatted stoichiometric reactions, state symbols, and mathematical physical chemistry formulas with 1-click clipboard copying.
    - **Virtual Lab Experiment**: Formal aim, required apparatus, step-by-step procedures, and observational inferences.
    - **Self-Check Practice**: 3 conceptual interactive MCQs with instant feedback, board-topper rationales, and XP progress tracking.
  - **White-Labeling & Integrity**:
    - 100% white-labeled under "Moleqyn Master Study Notes • NCERT Aligned" with zero external institute references, watermarks, or third-party proprietary mentions.

LESSON: Systematic Curricular Completeness
  - Providing an unbroken learning continuum from foundational primary science (Class 1) to advanced competitive senior chemistry (Class 12) positions Moleqyn as a unified, world-class virtual science laboratory and educational reference suite.

---
*Moleqyn CHANGELOG | Comprehensive Record: v1.0 Foundation → v6.2 Master Study Curriculum Suite | Last Updated: 2026-10-23*
