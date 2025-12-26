# 🚀 Deployment Instructions

## Files to Upload to GitHub

Upload these 6 files to the ROOT of your repository:

1. ✅ index.html
2. ✅ manifest.json
3. ✅ sw.js
4. ✅ vercel.json
5. ✅ app-icon.png (your icon file)
6. ✅ Splash.svg (your splash screen)
7. ✅ README.md (optional)

## ⚠️ Important Notes

- **DELETE** server.js if it exists (not needed for Vercel)
- **DELETE** package.json if it exists (not needed for Vercel)
- All files must be in the ROOT directory, not in subfolders
- Make sure app-icon.png and Splash.svg are in the root

## Repository Structure

```
your-repo/
├── index.html       ← PWA app (required)
├── manifest.json    ← PWA manifest (required)
├── sw.js           ← Service worker (required)
├── app-icon.png    ← Your app icon (required)
├── Splash.svg      ← Your splash screen (required)
├── vercel.json     ← Vercel config (required)
└── README.md       ← Documentation (optional)
```

## Vercel Deployment Steps

### Option 1: Via GitHub (Recommended)

1. Create a new GitHub repository
2. Upload all files to the ROOT (not in a folder)
3. Go to https://vercel.com
4. Click "New Project"
5. Import your GitHub repository
6. Click "Deploy" (no configuration needed)
7. Done! Your app will be live

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# In your project folder
vercel

# Follow the prompts
# Select "No" for build command
# Deploy!
```

## After Deployment

Your app will be available at:
`https://your-project-name.vercel.app/`

### Features That Will Work:

✅ Splash screen shows for 3.5 seconds
✅ Install prompt appears after 4 seconds
✅ PWA can be installed to home screen
✅ Works offline after first visit
✅ Persistent Device IDs
✅ Video calling works worldwide

## Troubleshooting

### "Cannot GET /" Error
- Make sure index.html is in the root
- Check that vercel.json is correct
- Delete server.js and package.json if they exist

### Install Prompt Not Showing
- Must be accessed via HTTPS (Vercel provides this)
- Only works on Chrome, Edge, Samsung Internet
- Won't show if already dismissed

### Service Worker Not Working
- Check browser console for errors
- Make sure sw.js is in the root
- Clear cache and hard reload (Ctrl+Shift+R)

## Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project
2. Settings → Domains
3. Add your custom domain
4. Follow Vercel's DNS instructions

---

Need help? Check the main README.md file for more details.