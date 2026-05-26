# 🚀 Deployment Guide – S Surya Sai Portfolio

## Step 1: Set Up the Project Locally

### Prerequisites
Install these first if you haven't:
- Node.js v18+ → https://nodejs.org
- Git → https://git-scm.com
- VS Code (recommended)

### Install and Run
```bash
# 1. Unzip the project folder
cd surya-portfolio

# 2. Install all dependencies
npm install

# 3. Run the app locally
npm start
# Opens at http://localhost:3000
```

---

## Step 2: Push to GitHub

### First Time Setup
```bash
# 1. Initialize Git in the project folder
git init

# 2. Add all files
git add .

# 3. First commit
git commit -m "Initial portfolio commit"

# 4. Go to github.com → New Repository
#    Name: surya-sai-portfolio
#    Keep it Public
#    Do NOT add README or .gitignore

# 5. Connect your local project to GitHub
git remote add origin https://github.com/YOUR_USERNAME/surya-sai-portfolio.git
git branch -M main
git push -u origin main
```

### Every Future Update
```bash
git add .
git commit -m "Update: describe what you changed"
git push
```

---

## Option A: Deploy on Vercel (RECOMMENDED – Fastest)

### Steps:
1. Go to → https://vercel.com
2. Click **Sign Up** → **Continue with GitHub**
3. Click **Add New Project**
4. Select your `surya-sai-portfolio` repository
5. Vercel auto-detects React — click **Deploy**
6. Wait ~2 minutes
7. ✅ Your live link: `https://surya-sai-portfolio.vercel.app`

### Custom Domain (Optional):
- In Vercel dashboard → Settings → Domains
- Add `suryasai.dev` or any domain you buy

### Auto-Deploy:
Every time you do `git push`, Vercel auto-deploys the update. No extra steps needed.

---

## Option B: Deploy on Netlify

### Steps:
1. Go to → https://netlify.com
2. Sign Up → **Continue with GitHub**
3. Click **Add new site** → **Import an existing project**
4. Choose GitHub → select `surya-sai-portfolio`
5. Build settings (Netlify auto-fills these):
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
6. Click **Deploy site**
7. ✅ Your live link: `https://random-name.netlify.app`

### Rename URL:
- Site settings → Change site name → `surya-sai-portfolio`
- New URL: `https://surya-sai-portfolio.netlify.app`

---

## Step 3: Add to Resume & LinkedIn

Once deployed, add your portfolio link to:

**Resume:**
```
Portfolio: https://surya-sai-portfolio.vercel.app
```

**LinkedIn Profile:**
- Edit Profile → Contact Info → Website
- Add your portfolio URL

**GitHub Profile README:**
```markdown
🌐 Portfolio: [surya-sai-portfolio.vercel.app](https://surya-sai-portfolio.vercel.app)
```

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `npm install` fails | Delete `node_modules` folder, run again |
| Build errors | Run `npm run build` locally first to see errors |
| White screen on deploy | Check `homepage` field in package.json (remove it) |
| Fonts not loading | Check internet — Google Fonts CDN needed |

---

## Future Improvements

Once you have more projects/experience, add these:
- Resume PDF download button
- GitHub/LinkedIn icon links in navbar
- Dark/light mode toggle
- Project live demo links
- Blog section (optional)
- Google Analytics integration

---

*Built with React.js + Tailwind CSS*
*Deployed for free on Vercel/Netlify*
