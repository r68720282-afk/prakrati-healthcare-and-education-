# Prakarati Healthcare & Education

Production-ready full-stack community platform.

## Project Structure
- `frontend/` React + Vite + Tailwind + Framer Motion
- `server/` Node.js + Express + MongoDB Atlas + JWT
- `render.yaml` Render blueprint for static frontend + web backend

## Local Development
```bash
cp .env.example .env
npm install
npm run build -w frontend
npm start -w server
```

## Required Environment Variables
- `MONGO_URI`
- `JWT_SECRET`
- `PORT`
- `FRONTEND_URL`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`

## Deployment (Render)
1. Push to GitHub.
2. In Render, create a new Blueprint and select this repository.
3. Apply all required environment variables.
4. Deploy services.
