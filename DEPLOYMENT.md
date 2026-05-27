# Render Deployment Guide

## Services
- `prakarati-server` (Node Web Service, `server/`)
- `prakarati-frontend` (Static Site, `frontend/`)

## Required Backend ENV
- `MONGO_URI`
- `JWT_SECRET`
- `PORT`
- `FRONTEND_URL`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`

## Local Verification
```bash
cp .env.example .env
npm install
npm run build -w frontend
npm start -w server
```

## Health checks
- `GET /health`
- `GET /api/public/config`
