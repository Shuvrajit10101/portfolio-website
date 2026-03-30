# 🚀 Shuvrajit's Portfolio Website

A cyberpunk-themed portfolio showcasing AI automation expertise and projects.

## ✨ Features

- **Futuristic Design**: Deep purple cyberpunk aesthetic with glitch effects and matrix animations
- **Responsive**: Works seamlessly on desktop, tablet, and mobile
- **Interactive Sections**:
  - Hero with typing animation
  - About with feature cards
  - Skills categorized by tech stack
  - Experience timeline
  - Featured projects
  - Education details
  - Contact form with Airtable integration

## 🛠️ Tech Stack

### Frontend
- React 19
- Tailwind CSS
- Shadcn/ui components
- Lucide React icons
- Custom animations

### Backend
- FastAPI
- Python 3.11
- MongoDB
- Airtable integration
- Pydantic validation

## 📦 Installation

### Prerequisites
- Node.js 16+
- Python 3.11+
- MongoDB
- Yarn

### Frontend Setup
```bash
cd frontend
yarn install
yarn start
```

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

## 🔧 Environment Variables

### Frontend (.env)
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Backend (.env)
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio_db
CORS_ORIGINS=*
AIRTABLE_API_KEY=your_api_key
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_TABLE_NAME=Contact Submissions
```

## 📧 Contact Form

Contact form submissions are stored in Airtable with the following fields:
- Name
- Email
- Subject (optional)
- Message
- Timestamp
- Status

## 🚀 Deployment

The application is deployed on Emergent platform with:
- Frontend on port 3000
- Backend on port 8001
- MongoDB for session management
- Airtable for contact form storage

## 📝 License

© 2026 Shuvrajit Home Choudhury. All rights reserved.

## 🔗 Links

- [LinkedIn](https://linkedin.com/in/shuvrajit-home-choudhury-9662083bb)
- [GitHub](https://github.com/Shuvrajit10101)
- Email: homechoudhuryapex@gmail.com

---

Built with ❤️ and AI by Shuvrajit Home Choudhury
