# ⚡ Quick Deploy to Vercel

## 1️⃣ Sign In
→ https://vercel.com/login
→ Continue with GitHub (Shuvrajit10101)

## 2️⃣ Import Project  
→ Click "Add New..." → "Project"
→ Select: `portfolio-website`
→ Click "Import"

## 3️⃣ Add Environment Variables
Click "Environment Variables" tab, add these 4 variables:

```
REACT_APP_BACKEND_URL = https://your-project.vercel.app
AIRTABLE_API_KEY = (use your Airtable API key)
AIRTABLE_BASE_ID = (use your Airtable Base ID)
AIRTABLE_TABLE_NAME = Contact Submissions
```

For each variable:
- Type name
- Paste value
- ✅ Check all 3: Production, Preview, Development  
- Click "Add"

## 4️⃣ Deploy
→ Click "Deploy" button
→ Wait 2-3 minutes

## 5️⃣ After First Deploy
→ Copy your Vercel URL
→ Update `REACT_APP_BACKEND_URL` with actual Vercel URL
→ Click "Redeploy"

## ✅ Done!
Your portfolio is live at: `https://portfolio-website-xxx.vercel.app`

---

**Full Guide:** See `VERCEL_DEPLOYMENT.md` for detailed instructions
