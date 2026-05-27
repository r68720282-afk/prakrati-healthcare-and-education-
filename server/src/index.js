import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { connectDB, isDatabaseAvailable } from './config/db.js';
import routes from './routes/index.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL?.split(',') || '*' }));
app.use(helmet());
app.use(express.json({ limit: '2mb' }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 400 }));

app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'prakarati-server', database: isDatabaseAvailable() ? 'connected' : 'mock' }));
app.use('/api', routes);
app.use(notFound);
app.use(errorHandler);

const PORT = Number(process.env.PORT) || 10000;

const start = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start().catch((e) => {
  console.error('Startup warning:', e.message);
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
