# Gold Calculator Philippines 🏆

A modern Vue.js application for calculating gold prices in the Philippines with different karat values (24K, 22K, 21K, 18K, 14K, 10K, 8K).

## 🌐 Live link (visible to everyone)

**https://basiertoronnel.github.io/Calculator-Gold/**

Works on any device and in incognito. **Repository must be Public** and **Pages source** must be **GitHub Actions** (see [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)).

## Features

- 🔐 User authentication (Registration & Login)
- ✨ Modern UI with gold theme
- 📊 7 separate calculators for different karat values
- 💰 Live Philippine gold rates per gram
- 🧮 Automatic calculation: (Gold Rate × Grams + Making Charge) + 12% Tax
- 📱 Fully responsive design

## Project Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/gold-calculator-ph.git
cd gold-calculator-ph
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Deploy to GitHub Pages

1. Update `vite.config.js` with your repository name:
```javascript
base: '/your-repo-name/'
```

2. Build the project:
```bash
npm run build
```

3. Deploy the `dist` folder to GitHub Pages using one of these methods:

### Option A: Using gh-pages package
```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"deploy": "gh-pages -d dist"
```

Then run:
```bash
npm run deploy
```

### Option B: Manual deployment
1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: Select `gh-pages` (or create it from `dist` folder)

## Project Structure

```
gold-calculator-vue/
├── src/
│   ├── components/
│   │   └── CalculatorCard.vue    # Individual calculator component
│   ├── views/
│   │   ├── AuthPage.vue           # Login/Register page
│   │   └── Dashboard.vue          # Main calculator dashboard
│   ├── App.vue                    # Root component
│   ├── main.js                    # Application entry point
│   └── style.css                  # Global styles
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- Vue 3 (Composition API)
- Vite
- CSS3 (Modern gradients and animations)

## Gold Rates (Philippine Peso per gram)

- 24K: ₱4,250
- 22K: ₱3,896
- 21K: ₱3,719
- 18K: ₱3,188
- 14K: ₱2,479
- 10K: ₱1,771
- 8K: ₱1,417

*Note: These are approximate rates. Update them in `Dashboard.vue` as needed.*

## License

MIT

## Author

Your Name
