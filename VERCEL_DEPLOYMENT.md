# 🚀 Deploy to Vercel - Simple Steps

Your portfolio is ready to deploy! Follow these steps:

---

## Step 1: Sign in to Vercel (1 minute)

1. Go to: **https://vercel.com/login**
2. Click **"Continue with GitHub"**
3. Use your GitHub account: **Shuvrajit10101**
4. Authorize Vercel if prompted

---

## Step 2: Import Your Repository (1 minute)

1. On Vercel dashboard, click **"Add New..." → "Project"**
2. Find and select: **`portfolio-website`**
3. Click **"Import"**

---

## Step 3: Configure Build Settings

Vercel will auto-detect most settings. Verify these:

### Framework Preset
- **Other** (custom configuration via vercel.json)

### Root Directory  
- **Leave as: `.` (root)**

### Build Command
- `cd frontend && yarn install && yarn build`

### Output Directory
- `frontend/build`

---

## Step 4: Add Environment Variables (IMPORTANT!)

Click **"Environment Variables"** and add these:

### Required Variables:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `REACT_APP_BACKEND_URL` | `https://your-project.vercel.app` | Production, Preview, Development |
| `AIRTABLE_API_KEY` | `pat8bKjMYPuSic6le...` (your key) | Production, Preview, Development |
| `AIRTABLE_BASE_ID` | `appORnCGdEv7tBcAj` | Production, Preview, Development |
| `AIRTABLE_TABLE_NAME` | `Contact Submissions` | Production, Preview, Development |
| `CORS_ORIGINS` | `*` | Production, Preview, Development |

**How to add:**
1. Type variable name (e.g., `AIRTABLE_API_KEY`)
2. Paste value
3. Check all three environments: Production, Preview, Development
4. Click "Add"
5. Repeat for each variable

**Important:** For `REACT_APP_BACKEND_URL`, use your Vercel URL after first deployment, then redeploy.

---

## Step 5: Deploy! 🚀

1. Click **"Deploy"** button
2. Wait 2-3 minutes for build
3. **Your portfolio will be LIVE!**

---

## Step 6: Update Backend URL (After First Deploy)

1. Copy your Vercel URL: `https://portfolio-website-xxx.vercel.app`
2. Go to **Project Settings → Environment Variables**
3. Edit `REACT_APP_BACKEND_URL` 
4. Set value to your Vercel URL
5. Click **"Redeploy"** to apply changes

---

## 🎉 You're Live!

### Your URLs:
- **Live Site**: `https://portfolio-website-xxx.vercel.app`
- **GitHub**: https://github.com/Shuvrajit10101/portfolio-website

### Automatic Deployments:
- ✅ Every push to `main` → Auto-deploy to production
- ✅ Pull requests → Preview deployments
- ✅ View logs and monitor in Vercel dashboard

---

## 📋 Features Working:

✅ Cyberpunk portfolio design with animations
✅ All sections (Hero, About, Skills, Experience, Projects, Education)
✅ Contact form saving to Airtable
✅ Responsive on all devices
✅ Live projects with clickable links
✅ Fast global CDN delivery
✅ Automatic HTTPS

---

## 🔧 Troubleshooting

### Build Fails:
- Check "Deployments" → Click failed deployment → View logs
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

### Contact Form Not Working:
- Verify Airtable credentials are correct
- Check "Functions" logs in Vercel
- Test Airtable connection in Airtable dashboard

### Can't See Updates:
- Clear browser cache (Ctrl + Shift + R)
- Wait a few minutes for deployment to complete
- Check deployment status in Vercel

---

## 🎯 Custom Domain (Optional)

Want your own domain? (e.g., shuvrajit.com)

1. Go to **Project Settings → Domains**
2. Add your domain
3. Update DNS settings as instructed
4. Wait for DNS propagation (5-30 minutes)

---

## 📞 Need Help?

Common issues solved:
- **Backend not responding**: Check environment variables are set
- **Build fails**: Ensure `yarn install` works locally first
- **Airtable errors**: Verify API key and Base ID in Vercel settings

---

**Ready?** Start with Step 1 above! 🚀
