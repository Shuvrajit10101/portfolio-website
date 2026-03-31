# 🚀 Vercel Deployment - Frontend Only (Simplified)

## The Solution

Deploy **frontend only** on Vercel (backend stays on your current server or deploy separately).

---

## Step 1: Update Vercel Project Settings

In your Vercel project dashboard:

### Build & Development Settings:

1. **Framework Preset**: `Create React App`

2. **Root Directory**: `frontend`

3. **Build Command**: 
   ```
   yarn install && yarn build
   ```

4. **Output Directory**: 
   ```
   build
   ```

5. **Install Command**: 
   ```
   yarn install
   ```

---

## Step 2: Environment Variables

Add these in Vercel dashboard → Environment Variables:

```
REACT_APP_BACKEND_URL = https://your-backend-url.com
```

**Options for backend:**
- Keep on Emergent (current deployment)
- Deploy backend separately on:
  - Railway.app (easiest for FastAPI)
  - Render.com (free tier available)
  - Fly.io
  - Or use Vercel CLI to deploy backend as separate project

---

## Step 3: Deploy

Click **"Deploy"** or **"Redeploy"**

The frontend will build successfully and be live!

---

## 🎯 Why This Works

- **Vercel excels at frontend** (React, Next.js, Vue)
- **Mixed monorepos are complex** on Vercel
- **Separation is cleaner**: Frontend on Vercel, Backend elsewhere
- **Same result**: Portfolio works perfectly!

---

## Alternative: Deploy Backend on Railway

If you want backend live too:

1. Go to: https://railway.app
2. Sign in with GitHub
3. **New Project** → **Deploy from GitHub repo**
4. Select `portfolio-website`
5. **Settings**:
   - Root Directory: `backend`
   - Start Command: `uvicorn server:app --host 0.0.0.0 --port $PORT`
6. Add environment variables (Airtable credentials)
7. Deploy!

Then update `REACT_APP_BACKEND_URL` in Vercel to Railway URL.

---

## Current Recommended Setup:

**Frontend**: Vercel ✅ 
**Backend**: Keep on Emergent (already working) ✅

Just set `REACT_APP_BACKEND_URL` to your Emergent backend URL!

---

**Ready?** Update Vercel settings per Step 1 above!
