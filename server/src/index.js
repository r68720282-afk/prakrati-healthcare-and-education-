import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { connectDB } from './config/db.js';
import routes from './routes/index.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL?.split(',') || '*' }));
app.use(helmet());
app.use(express.json({ limit: '2mb' }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 400 }));

app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'prakarati-server' }));
app.use('/api', routes);
app.use(notFound);
app.use(errorHandler);

const PORT = Number(process.env.PORT) || 5000;
connectDB()
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((e) => {
    console.error('Startup failure:', e.message);
    process.exit(1);
  });
