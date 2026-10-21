# 🚀 Moleqyn Deployment & Hosting Guide
### How to take Moleqyn live to students and schools

> **⚠️ Demo Notice:** All login flows (`login.html`) are client-side simulations.
> No real authentication, OTP delivery, or server-side account storage occurs.
> Label clearly as a demo before sharing with real students.

---

## 1. ⚡ Vercel Deployment (Recommended)

Moleqyn ships with a `vercel.json` that enables:
- **Clean URLs disabled** (`cleanUrls: false`) — all internal links use `.html` extensions (e.g. `login.html`), so clean URL rewriting must be off or navigation breaks with `ERR_FAILED`
- **Cache-Control headers** — HTML pages are not cached; CSS/JS assets are cached for 1 year (immutable); `sw.js` is always fetched fresh
- **Service Worker routing** — `sw.js` is served from the root scope with `Service-Worker-Allowed: /`


### Option A: Via GitHub (Continuous Deployment)
1. Initialize a Git repository and push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Moleqyn: Initial deployment"
   git remote add origin https://github.com/YOUR_USERNAME/moleqyn.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** → Import your `moleqyn` GitHub repository.
4. Framework Preset: **Other** (Static HTML).
5. Root Directory: `./` (leave default).
6. Click **Deploy**. Your site will be live on `https://moleqyn.vercel.app` with free SSL and global CDN.

### Option B: Via Vercel CLI (Direct Upload)
```bash
npx vercel
# Follow the prompts: set root directory to ./, confirm deploy
npx vercel --prod
```

---

## 2. 🌐 Netlify Deployment

1. Go to [app.netlify.com](https://app.netlify.com/).
2. Drag and drop your project folder directly into the **"Drag & drop your site output folder here"** area.
3. Netlify will publish your entire static app in seconds with custom domain support.

---

## 3. 🐙 GitHub Pages (Free Academic Hosting)

1. In your GitHub repository, open **Settings** → **Pages**.
2. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: `main` / Folder: `/ (root)`
3. Click **Save**. Within 2 minutes, your lab will be live at `https://YOUR_USERNAME.github.io/moleqyn/`.

---

## 4. 💻 Offline School Lab Distribution (No Internet Required)

For school computer labs or smart boards with weak internet:
1. Compress the project folder into a ZIP file: `Moleqyn_Offline_Lab.zip`.
2. Extract onto any school PC or flash drive.
3. Double-click `index.html` in any browser (Chrome, Edge, Firefox).
4. All simulation engines run 100% client-side with zero external dependencies (Google Fonts load from CDN — optional for appearance only).

---

## 5. 🔍 Testing the Deployment

After deploying, verify:
- [ ] `/login` (clean URL) loads the login page with the Demo Mode banner visible
- [ ] `/sw.js` returns 200 and `Cache-Control: no-cache, no-store, must-revalidate`
- [ ] `/css/style.css` returns `Cache-Control: public, max-age=31536000, immutable`
- [ ] Navigating to a non-existent route returns Vercel's default 404 (no redirect loop)
- [ ] The service worker registers successfully on `index.html` (check DevTools → Application → Service Workers)

---

*Moleqyn Deployment Guide | Updated 2026-10-14*
