import SiteContent from '../models/SiteContent.js';
import { isDatabaseAvailable } from '../config/db.js';

const fallbackContent = {
  homepage: {
    heroTitle: 'Building Healthier Communities for a Better Tomorrow',
    heroSubtitle: 'Supporting wellness, healthcare awareness, education, and community development through meaningful initiatives.'
  },
  contact: {
    email: 'hello@prakrati.com',
    phone: '+91-98765-43210',
    hours: 'Mon - Sat, 9:00 AM - 6:00 PM'
  }
};

export const listContent = async (_req, res, next) => {
  try {
    if (!isDatabaseAvailable()) return res.json(fallbackContent);
    const docs = await SiteContent.find().lean();
    const mapped = docs.reduce((acc, item) => ({ ...acc, [item.key]: item.value }), {});
    return res.json(mapped);
  } catch (error) { return next(error); }
};

export const saveContent = async (req, res, next) => {
  try {
    if (!isDatabaseAvailable()) return res.status(503).json({ message: 'Database unavailable.' });
    const { key, value, published = true } = req.body;
    if (!key) return res.status(400).json({ message: 'key is required' });
    const doc = await SiteContent.findOneAndUpdate({ key }, { value, published }, { upsert: true, new: true, runValidators: true });
    return res.json(doc);
  } catch (error) { return next(error); }
};
