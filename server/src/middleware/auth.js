import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';
import { isDatabaseAvailable } from '../config/db.js';

export const protectAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'dev-secret');

    if (!isDatabaseAvailable()) {
      req.admin = { _id: decoded.id || 'mock-admin', role: 'admin', name: 'Fallback Admin', email: 'admin@local' };
      return next();
    }

    req.admin = await Admin.findById(decoded.id).select('-password');
    if (!req.admin) return res.status(401).json({ message: 'Unauthorized' });
    return next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
