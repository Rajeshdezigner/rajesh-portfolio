# Rajesh — MERN Portfolio 🚀

A full MERN stack developer portfolio with:
- **React 18 + Vite** frontend (VSCode-style UI)
- **Express.js + Node.js** backend API
- **MongoDB** to store contact form submissions
- **Nodemailer** for email notifications on new messages

---

## 📁 Project Structure

```
rajesh-portfolio/
├── client/               ← React + Vite frontend
│   ├── src/
│   │   ├── components/   ← Hero, About, Skills, Projects, Experience, Contact
│   │   ├── styles/       ← global.css
│   │   ├── App.jsx       ← Main layout (sidebar, tabs, minimap)
│   │   └── main.jsx      ← React entry point
│   ├── index.html
│   └── vite.config.js    ← Proxy /api → Express
│
├── server/               ← Express backend
│   ├── models/Contact.js ← MongoDB schema
│   ├── routes/contact.js ← POST /api/contact, GET /api/contact
│   ├── index.js          ← Server entry point
│   ├── .env.example      ← Copy to .env and fill in
│   └── package.json
│
└── package.json          ← Root scripts (dev, build, install-all)
```

---

## 🚀 Quick Start (Local Development)

### Step 1 — Install dependencies
```bash
npm run install-all
```

### Step 2 — Configure environment
```bash
cp server/.env.example server/.env
# Open server/.env and add your MongoDB URI and email credentials
```

### Step 3 — Run both servers together
```bash
npm run dev
```

- React dev server: http://localhost:5173
- Express API:      http://localhost:5000
- Health check:     http://localhost:5000/api/health

The Vite proxy automatically forwards `/api/*` requests to Express, so no CORS issues in dev.

---

## ⚙️ Environment Variables (server/.env)

| Variable       | Description                                  |
|----------------|----------------------------------------------|
| `PORT`         | Express port (default: 5000)                 |
| `MONGODB_URI`  | MongoDB Atlas connection string              |
| `EMAIL_USER`   | Gmail address for sending notifications      |
| `EMAIL_PASS`   | Gmail App Password (not your main password)  |
| `EMAIL_TO`     | Your email to receive contact notifications  |
| `CLIENT_URL`   | Frontend URL for CORS (default: localhost:5173) |

### Getting a MongoDB URI (free):
1. Sign up at https://cloud.mongodb.com
2. Create a free M0 cluster
3. Click "Connect" → "Drivers" → copy the URI
4. Replace `<password>` with your DB user password

### Getting Gmail App Password:
1. Enable 2FA on your Google account
2. Go to https://myaccount.google.com/apppasswords
3. Create an app password for "Mail"
4. Use that 16-character password as `EMAIL_PASS`

---

## 🌐 Hosting (Production)

### Option A — Render.com (Free, easiest)
1. Push to GitHub
2. Create a **Web Service** for the server folder
   - Build: `cd server && npm install`
   - Start: `cd server && npm start`
   - Add env variables in Render dashboard
3. Create a **Static Site** for the client folder
   - Build: `cd client && npm install && npm run build`
   - Publish: `client/dist`
   - Add env variable: `VITE_API_URL=https://your-server.onrender.com`

### Option B — Railway.app
1. Deploy server as a Railway service
2. Deploy client to Netlify/Vercel (static)

### Option C — Single server (full-stack deploy)
1. Build React: `npm run build` (inside client/)
2. The Express server already serves `client/dist` in production
3. Deploy only the server to Render/Railway/Heroku
4. Set `NODE_ENV=production` in env variables

---

## 📡 API Endpoints

| Method | Endpoint       | Description                    |
|--------|---------------|--------------------------------|
| POST   | /api/contact  | Save message + send email      |
| GET    | /api/contact  | List all messages (your use)   |
| GET    | /api/health   | Server + DB status check       |

### POST /api/contact — Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Let's work together!"
}
```

### Response:
```json
{
  "success": true,
  "message": "Message sent successfully!",
  "id": "664f1a2b3c4d5e6f7a8b9c0d"
}
```

---

## 🔧 Customization

- **Your details:** Edit `client/src/components/Contact.jsx` (email, phone, GitHub, LinkedIn)
- **Projects:** Edit `client/src/components/Projects.jsx` — add real GitHub and demo links
- **Experience:** Edit `client/src/components/Experience.jsx`
- **Skills:** Edit `client/src/components/Skills.jsx`
- **Colors/fonts:** Edit `client/src/styles/global.css` CSS variables

---

Built with ❤️ by Rajesh · Chennai, India
