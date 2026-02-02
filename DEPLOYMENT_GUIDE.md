# 🚀 Complete Deployment Guide for Gold Calculator Vue App

## Prerequisites
- Git installed on your computer
- Node.js (v16+) installed
- GitHub account

---

## ✅ Make the link visible to EVERYONE (any device, incognito)

For the link to work for **anyone** with the link—on any device or in incognito—do these two things on GitHub:

### 1. Make the repository **Public**

If the repo is **private**, GitHub **unpublishes** the Pages site, so the link will not work for others.

1. Open **https://github.com/basiertoronnel/Calculator-Gold**
2. Go to **Settings** → scroll to **Danger Zone**
3. Click **Change visibility** → choose **Public** → confirm

### 2. Set GitHub Pages source to **GitHub Actions**

1. In the same repo: **Settings** → **Pages** (left sidebar)
2. Under **Build and deployment** → **Source**, select **GitHub Actions**
3. Save (no need to pick a branch)

**Result:**  
**https://basiertoronnel.github.io/Calculator-Gold/** will work for anyone, on any device, including incognito. No login required to open the link.

### Link still not visible to others?

1. **First-time deploy approval**  
   Go to **Settings** → **Environments** → **github-pages**. If it says "Required reviewers", either add yourself and approve the deployment, or remove the requirement so deployments run automatically.

2. **Wait for the workflow**  
   After each push, go to **Actions** and wait until the "Deploy to GitHub Pages" workflow is green. Only then is the site updated.

3. **Share the exact link**  
   Use: **https://basiertoronnel.github.io/Calculator-Gold/** (with the trailing slash).

---

## Method 1: Automatic Deployment with GitHub Actions (Recommended)

This method automatically deploys your app whenever you push to GitHub.

### Step 1: Prepare Your Project

1. **vite.config.js** uses `base: './'` so the app loads correctly on GitHub Pages (no change needed).

### Step 2: Push to GitHub

```bash
# Navigate to your project folder
cd gold-calculator-vue

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Gold Calculator Vue app"

# Create repository on GitHub (via website)
# Then connect it:
git remote add origin https://github.com/basiertoronnel/Calculator-Gold.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Click **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Your site will automatically deploy!

### Step 4: Access Your Live Site

After 2-3 minutes, visit:
```
https://basiertoronnel.github.io/Calculator-Gold/
```

**That's it!** Every time you push changes, it will automatically redeploy.

---

## Method 2: Manual Deployment

If you prefer to deploy manually:

### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2: Add Deploy Script

Add to `package.json`:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "vite build && gh-pages -d dist"
}
```

### Step 3: Deploy

```bash
npm run deploy
```

### Step 4: Configure GitHub Pages

1. Go to Settings → Pages
2. Source: **Deploy from branch**
3. Branch: **gh-pages**
4. Click Save

---

## Local Development

### First Time Setup

```bash
# Navigate to project
cd gold-calculator-vue

# Install dependencies
npm install

# Run development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Making Changes

1. Edit files in `src/`
2. Save and see changes instantly (hot reload)
3. When ready, push to GitHub:

```bash
git add .
git commit -m "Your change description"
git push
```

If using GitHub Actions, it will auto-deploy. If using manual method, run `npm run deploy`.

---

## Updating Gold Rates

Edit `src/views/Dashboard.vue`, line ~24:

```javascript
const karats = ref([
  { name: '24K', rate: 4250, grams: 0, makingCharge: 0 },  // Update rates here
  { name: '22K', rate: 3896, grams: 0, makingCharge: 0 },
  // ...
])
```

---

## Troubleshooting

### Site not loading?
- Check that `base` in `vite.config.js` matches your repo name
- Wait 2-3 minutes after first deployment
- Clear browser cache (Ctrl+F5)

### Build failing?
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Can't push to GitHub?
```bash
# First time? Set up authentication
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Use Personal Access Token instead of password
# Generate at: GitHub → Settings → Developer Settings → Personal Access Tokens
```

---

## Project Structure

```
gold-calculator-vue/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment config
├── src/
│   ├── components/
│   │   └── CalculatorCard.vue  # Calculator component
│   ├── views/
│   │   ├── AuthPage.vue        # Login/Register
│   │   └── Dashboard.vue       # Main app
│   ├── App.vue                 # Root component
│   ├── main.js                 # Entry point
│   └── style.css               # Global styles
├── public/                      # Static assets
├── index.html                   # HTML entry
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
└── README.md                   # Documentation
```

---

## Tips

1. **Custom Domain**: In GitHub Pages settings, you can add a custom domain
2. **HTTPS**: GitHub Pages automatically provides HTTPS
3. **Analytics**: Add Google Analytics by editing `index.html`
4. **SEO**: Update meta tags in `index.html` for better SEO

---

## Need Help?

- GitHub Pages Docs: https://docs.github.com/en/pages
- Vite Docs: https://vitejs.dev/
- Vue 3 Docs: https://vuejs.org/

Good luck! 🎉
