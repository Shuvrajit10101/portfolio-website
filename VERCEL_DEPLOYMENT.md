# 🚀 Vercel Deployment Guide

## Step 1: Connect GitHub to Vercel (2 minutes)

1. **Go to Vercel**: https://vercel.com/login
2. **Sign in with GitHub** (use the same account: Shuvrajit10101)
3. **Authorize Vercel** to access your GitHub repositories

---

## Step 2: Import Your Repository (1 minute)

1. **Click "New Project"** on Vercel dashboard
2. **Import Git Repository**
3. **Select**: `Shuvrajit10101/portfolio-website`
4. **Click "Import"**

---

## Step 3: Configure Project Settings

### Framework Preset
- Select: **Other** (we have custom configuration)

### Root Directory
- Leave as: `/` (root)

### Build Settings
- **Build Command**: `cd frontend && yarn install && yarn build`
- **Output Directory**: `frontend/build`
- **Install Command**: `yarn install`

### Environment Variables (IMPORTANT!)

Add these environment variables in Vercel:

#### Frontend Variables
```
REACT_APP_BACKEND_URL=https://your-project.vercel.app
```

#### Backend Variables
```
MONGO_URL=mongodb+srv://your-mongodb-url (Use MongoDB Atlas for production)
DB_NAME=portfolio_db
CORS_ORIGINS=*
AIRTABLE_API_KEY=your_airtable_api_key_here
AIRTABLE_BASE_ID=your_airtable_base_id_here
AIRTABLE_TABLE_NAME=Contact Submissions
```

**How to add environment variables:**
1. In Vercel project settings
2. Go to "Environment Variables" tab
3. Add each variable with its value
4. Select "Production", "Preview", and "Development"
5. Click "Save"

---

## Step 4: MongoDB Atlas Setup (Required for Production)

Since Vercel is serverless, you need MongoDB Atlas (cloud MongoDB):

1. **Go to**: https://www.mongodb.com/cloud/atlas/register
2. **Create free cluster** (M0 Sandbox - Free forever)
3. **Database Access**: Create user with password
4. **Network Access**: Add IP `0.0.0.0/0` (allow all)
5. **Get Connection String**: 
   - Click "Connect" → "Connect your application"
   - Copy connection string
   - Replace `<password>` with your database password
   - Use this as `MONGO_URL` in Vercel

---

## Step 5: Deploy! 🚀

1. **Click "Deploy"** in Vercel
2. **Wait 2-3 minutes** for build to complete
3. **Your site will be live!**

---

## 📋 After Deployment

### Your URLs:
- **Production**: `https://portfolio-website-xxx.vercel.app`
- **Custom Domain**: You can add your own domain in Vercel settings

### Automatic Deployments:
- Every push to `main` branch → Automatic deployment
- Preview deployments for Pull Requests

### Monitor Deployments:
- View logs in Vercel dashboard
- Check function execution
- Monitor errors

---

## 🔧 Important Notes

### Backend Considerations:
- FastAPI runs as serverless functions on Vercel
- Each request starts a new function instance
- Cold starts may occur (first request slower)
- MongoDB Atlas required (local MongoDB won't work)

### Frontend:
- Static build deployed to Vercel CDN
- Fast global delivery
- Automatic HTTPS

### Contact Form:
- Airtable integration works perfectly
- Submissions saved to your Airtable base

---

## 🐛 Troubleshooting

### Build Fails:
- Check build logs in Vercel
- Ensure all dependencies in package.json
- Verify environment variables are set

### Backend API Not Working:
- Check `/api` routes are configured
- Verify CORS settings
- Check MongoDB Atlas connection string
- View function logs in Vercel

### Frontend Can't Connect to Backend:
- Update `REACT_APP_BACKEND_URL` to your Vercel domain
- Redeploy after changing environment variables

---

## 📞 Need Help?

If you encounter issues:
1. Check Vercel deployment logs
2. Test locally first: `yarn start` (frontend) and `uvicorn server:app` (backend)
3. Verify all environment variables are set correctly

---

**Ready to Deploy?** Follow Step 1 above and let's get your portfolio live! 🚀
