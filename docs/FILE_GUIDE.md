# 🗺️ FILE GUIDE — Moleqyn Chemistry Learning Platform
### "Kaunsi file kya karti hai" — Complete Architecture Reference

---

## 🏗️ PROJECT STRUCTURE

```
d:\Moleqyn- Projects\
│
├── 🌐 CORE PLATFORM PAGES (17 Pages)
│   ├── 📄 index.html              ← Landing page & Interactive Canvas Hero
│   ├── 📄 simulators.html         ← Virtual Lab Hub (Launches all 12 simulators)
│   ├── 📄 learn.html              ← Interactive NCERT curriculum modules (Class 6-12)
│   ├── 📄 board-prep.html         ← Class 10/12 CBSE/ICSE & AP Chemistry PYQs & drills
│   ├── 📄 experiments.html        ← NCERT practical guides, apparatus & lab manuals
│   ├── 📄 periodic-table.html     ← Interactive 118-element periodic grid in 3D
│   ├── 📄 reaction.html           ← Chemical equation balancer & stoichiometry scale
│   ├── 📄 nomenclature.html       ← IUPAC organic chemistry nomenclature practice engine
│   ├── 📄 junior.html             ← Moleqyn Junior (Ages 5-14 foundation science)
│   ├── 📄 ai-tutor.html           ← 24/7 AI chemistry doubt-solving assistant
│   ├── 📄 vr-lab.html             ← Immersive 3D virtual reality laboratory
│   ├── 📄 quiz.html               ← Timed concept quizzes & test engine
│   ├── 📄 dashboard.html          ← Student progress portal, XP, streak & mastery
│   ├── 📄 resources.html          ← Revision notes, formula cheat sheets & downloads
│   ├── 📄 login.html              ← Student authentication & session portal
│   ├── 📄 about.html              ← Mission, curriculum alignment & team
│   └── 📄 contact.html            ← Support channels, FAQ & institutional pilots
│
├── 🧪 DEDICATED VIRTUAL SIMULATORS (12 Engines)
│   ├── 📄 sim_atomverse.html      ← Bohr atomic models, electron shells & orbitals
│   ├── 📄 sim_bonding.html        ← 3D VSEPR molecular geometry & bond angles
│   ├── 📄 sim_titration.html      ← Acid-base neutralization titration curve generator
│   ├── 📄 sim_gaslaws.html        ← Boyle's, Charles's & Ideal Gas Law (PV=nRT)
│   ├── 📄 sim_electro.html        ← Daniell cell & standard reduction potential
│   ├── 📄 sim_particle.html       ← States of matter particle chamber & phase changes
│   ├── 📄 sim_equilibrium.html    ← Le Chatelier dynamic equilibrium & Haber process
│   ├── 📄 sim_flametest.html      ← Atomic emission spectroscopy & cation flame tests
│   ├── 📄 sim_calorimetry.html    ← Specific heat, enthalpy (q = mcΔT) & calorimetry
│   ├── 📄 sim_halflife.html       ← Radioactive decay kinetics (C-14, U-238, I-131)
│   ├── 📄 sim_molecules.html      ← 3D molecular builder & covalent bonds
│   └── 📄 sim_rutherford.html     ← Gold foil alpha particle scattering physics
│
├── 🎨 STYLING & DESIGN
│   ├── 📁 css\
│   │   ├── 📄 style.css           ← Main design system tokens, themes & hero canvas
│   │   └── 📄 pages.css           ← Component styles for multi-page platform suite
│   └── 📄 favicon.svg             ← Brand SVG favicon
│
├── ⚙️ LOGIC & SHARED SCRIPTS
│   └── 📁 js\
│       ├── 📄 shared-nav.js       ← Theme sync (`mlab-theme`), mobile menu & auth state
│       ├── 📄 main.js             ← Landing hero interactions & substance catalogs
│       └── 📄 matter-lab.js       ← 2D Canvas physics engine
│
├── 🛠️ AUTOMATION & TOOLING
│   ├── 📄 audit_platform.ps1      ← Platform health, links & brand unification scanner
│   ├── 📄 unify_nav.ps1           ← Global floating navbar injection script
│   └── 📄 vercel.json             ← Production deployment configuration
│
└── 📚 DOCUMENTATION
    ├── 📄 CHANGELOG.md            ← Master version history (v1.0 to v5.2)
    ├── 📁 docs\
    │   ├── 📄 FILE_GUIDE.md       ← Complete project file guide (This file)
    │   └── 📄 HOW_TO_ADD_CHANGES.md ← Workflow for documenting future changes
```

---

## 🌟 CORE ARCHITECTURAL PATTERNS

### 1. Hub-and-Spoke Lab Architecture
- **Central Hub:** [`simulators.html`](file:///d:/Moleqyn-%20Projects/simulators.html) serves as the primary catalog.
- **Independent Modules:** Each simulator (`sim_*.html`) runs in complete isolation with its own Canvas 2D/3D physics engine, preventing performance bottlenecks and script collisions.

### 2. Unified Navigation & Brand System
- **Floating Glass Navbar:** Fixed top glassmorphism bar featuring dropdown categories, student portal button, and light/dark mode switch.
- **Theme Persistence:** Stores user preference under `mlab-theme` in `localStorage`, automatically respected by [`js/shared-nav.js`](file:///d:/Moleqyn-%20Projects/js/shared-nav.js).
- **Authentication State:** Syncs active user profile from `localStorage` (`mlab_user`, `moleqyn_user`) across all navigation bars.

### 3. Curriculum Alignment
- Modules are categorized by CBSE / ICSE / State Board grades:
  - **Junior (Class 6–8):** [`junior.html`](file:///d:/Moleqyn-%20Projects/junior.html)
  - **Secondary (Class 9–10):** [`board-prep.html`](file:///d:/Moleqyn-%20Projects/board-prep.html), [`reaction.html`](file:///d:/Moleqyn-%20Projects/reaction.html), [`sim_particle.html`](file:///d:/Moleqyn-%20Projects/sim_particle.html)
  - **Senior Secondary (Class 11–12 & AP):** [`board-prep.html`](file:///d:/Moleqyn-%20Projects/board-prep.html), [`nomenclature.html`](file:///d:/Moleqyn-%20Projects/nomenclature.html), [`sim_electro.html`](file:///d:/Moleqyn-%20Projects/sim_electro.html), [`sim_titration.html`](file:///d:/Moleqyn-%20Projects/sim_titration.html)

---

## 🔧 SCRIPTS & AUDITING

| Tool | Path | Usage |
| :--- | :--- | :--- |
| **Platform Audit** | [`audit_platform.ps1`](file:///d:/Moleqyn-%20Projects/audit_platform.ps1) | `powershell -ExecutionPolicy Bypass -File .\audit_platform.ps1` — Scans all pages for broken links, responsive viewport tags, branding, and CSS compatibility. |
| **Navbar Synchronization** | [`unify_nav.ps1`](file:///d:/Moleqyn-%20Projects/unify_nav.ps1) | Propagates unified floating navbar updates across all pages. |

---

*Moleqyn FILE_GUIDE.md | Comprehensive Platform Reference | v5.2*
