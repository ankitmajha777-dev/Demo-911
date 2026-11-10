# Roast & Revel — Premium Artisanal Coffee Shop Website

> **"Where Every Cup Tells a Story."**

A luxury editorial multi-page web experience crafted for **Roast & Revel**, an artisanal single-origin roastery, espresso bar, and French viennoiserie café. Designed with a timeless European café aesthetic, rich typography, tactile textures, and a clean multi-page HTML architecture.

---

## 🏛️ Project Architecture & Pages

Every major section has its own dedicated HTML page for clean SEO, direct linking, and authentic multi-page navigation:

| Page | Filename | Description |
| :--- | :--- | :--- |
| **Home** | `index.html` | Hero background, trust & terroir strip, best-selling drinks, story preview, critical reviews, reservation banner. |
| **Menu** | `menu.html` | Full coffee & viennoiserie menu with interactive category filters, USD pricing, origin notes, and detailed modal. |
| **Our Coffee** | `coffee.html` | Direct-trade single origins (Ethiopia, Colombia, Guatemala, Sumatra), roasting philosophy, and master brewing guides. |
| **About Us** | `about.html` | Brand origin story, four guiding pillars, 4-stage seed-to-cup craft process, team bios, and architecture. |
| **Gallery** | `gallery.html` | Editorial photo gallery with category filter tabs and interactive keyboard-accessible Lightbox modal. |
| **Reservations** | `reservations.html` | Validated table booking form, seating preferences, and dynamic confirmation voucher generator. |
| **Contact** | `contact.html` | Flagship addresses, hours, stylized interactive map placeholder, direct dispatch form, and social channels. |
| **404 Not Found** | `404.html` | "A Spilled Cup" editorial 404 error page with quick links to return home or view the menu. |

---

## 📁 GitHub-Ready Project Structure

This repository is structured for **100% compatibility** with GitHub, GitHub Pages, Vite, and standalone static file hosts:

```text
roast-and-revel/
├── index.html              # Home Page
├── menu.html               # Seasonal Coffee & Bakery Menu
├── coffee.html             # Single Origins & Brewing Guide
├── about.html              # Story, Philosophy & Team
├── gallery.html            # Photography & Lightbox Viewer
├── reservations.html       # Online Table Booking
├── contact.html            # Location, Map & Dispatch Form
├── 404.html                # Error / Missing Page
├── roast-and-revel.zip     # Complete packaged distribution archive
│
├── assets/
│   ├── images/
│   │   ├── hero.jpg        # Master latte art hero photography
│   │   ├── beans.jpg       # Roasting cooling tray & single-origin sacks
│   │   ├── interior.jpg    # Architectural café ambiance & walnut bar
│   │   ├── bakery.jpg      # Laminated French croissants & pastries
│   │   └── pourover.jpg    # Precision V60 pour-over blooming
│   └── icons/
│
├── css/
│   └── style.css           # Master stylesheet (Playfair Display, palette, responsive grids)
│
├── js/
│   └── main.js             # Sticky header, mobile drawer, filters, modals, reservation generator
│
├── public/                 # Vite public asset directory
├── vite.config.ts          # Configured with multi-page rollup inputs & relative base ('./')
├── package.json            # Vite scripts & dependencies
└── README.md               # Complete documentation & GitHub deployment guide
```

---

## 🚀 How to Run Locally

You have **two flexible ways** to run this project:

### Option A: Instant Static Preview (Zero Dependencies)
You do not need Node.js or npm to run this website!
1. Download or extract the repository folder.
2. Double-click `index.html` to open it directly in any modern browser (Chrome, Safari, Firefox, Edge).
3. All navigation links, images, CSS, and interactive JavaScript features work out of the box because all paths are **strictly relative**.

*Optional local static server:*
```bash
# Using Python 3:
python3 -m http.server 8000

# Or using npx serve:
npx serve .
```

### Option B: Modern Vite Development (Bundler)
```bash
# 1. Install dependencies
npm install

# 2. Start local Vite development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview production build
npm run preview
```

---

## 📦 How to Upload to GitHub (Step-by-Step)

### Method 1: Via GitHub Web Interface (Easiest)
1. Go to [github.com](https://github.com) and log into your account.
2. Click the **"+"** icon in the top right and select **"New repository"**.
3. Name your repository (e.g., `roast-and-revel`).
4. Set visibility to **Public**, leave "Initialize with a README" unchecked, and click **"Create repository"**.
5. On the empty repository page, click the link that says **"uploading an existing file"**.
6. Drag and drop all project files (`index.html`, `menu.html`, `coffee.html`, `about.html`, `gallery.html`, `reservations.html`, `contact.html`, `404.html`, `css/`, `js/`, `assets/`, `README.md`) into the browser.
7. Click **"Commit changes"**.

---

### Method 2: Via Git Command Line (Recommended for Developers)
```bash
# 1. Open your terminal in the roast-and-revel folder
cd /path/to/roast-and-revel

# 2. Initialize git repository
git init

# 3. Add all files
git add .

# 4. Create your first commit
git commit -m "Initial release: Roast & Revel luxury coffee shop website"

# 5. Set default branch to main
git branch -M main

# 6. Link to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/roast-and-revel.git

# 7. Push files to GitHub
git push -u origin main
```

---

## 🌐 How to Deploy on GitHub Pages (Free Hosting)

Once your code is pushed to GitHub, you can publish the live site for free in 30 seconds:

1. Open your repository on GitHub.
2. Click on the **Settings** tab at the top.
3. In the left-hand sidebar under "Code and automation", click **Pages**.
4. Under **"Build and deployment" > "Source"**, select **Deploy from a branch**.
5. Under **"Branch"**:
   - Select `main` (or `master`).
   - Select `/ (root)`.
   - Click **Save**.
6. Wait 1–2 minutes. GitHub will display a notification:
   > *"Your site is live at `https://<your-username>.github.io/<repository-name>/`"*
7. Click the link to view your live, fully functional Roast & Revel website!

---

## 💡 Why This Project Never Breaks on GitHub Pages

Common issues with importing websites into GitHub and how Roast & Revel solves them:

1. **Broken Images / 404s**: All assets use relative paths (`assets/images/hero.jpg`, `css/style.css`, `js/main.js`). They adapt dynamically whether deployed at root (`example.com/`) or in a GitHub Pages subdirectory (`username.github.io/repo/`).
2. **Missing Local Absolute Paths**: No absolute machine paths (like `C:\Users\` or `/home/user/`) are used anywhere.
3. **No Missing CSS/JS**: All stylesheets and scripts are committed directly in `css/` and `js/` and mirrored in `public/`.
4. **Vite Multi-Page Rollup**: In `vite.config.ts`, `base: './'` is configured and all HTML files are registered as build entrypoints. Running `npm run build` outputs clean, standalone HTML files into `dist/`.

---

## 🎨 Color Palette & Typography

- **Espresso Brown**: `#2B1D17`
- **Coffee Brown**: `#6B422E`
- **Cream**: `#F7F1E8`
- **Off White**: `#FAF9F6`
- **Charcoal Black**: `#171513`
- **Muted Gold**: `#B69A65`
- **Headings**: *Playfair Display* (Editorial Serif)
- **Body & UI**: *Plus Jakarta Sans* / *Inter*
- **Specs & Pricing**: *JetBrains Mono* (Tabular Numerals)

---

## 📄 License

&copy; 2026 Roast & Revel Coffee Co. All rights reserved. Built with pride for specialty coffee lovers.
