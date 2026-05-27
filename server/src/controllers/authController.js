import Admin from '../models/Admin.js';
import { isDatabaseAvailable } from '../config/db.js';
import { generateToken } from '../utils/token.js';

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!isDatabaseAvailable()) {
    if (!email || !password) return res.status(400).json({ message: 'Email and password required' });
    return res.json({
      token: generateToken('mock-admin'),
      admin: { id: 'mock-admin', name: 'Fallback Admin', email }
    });
  }

  const admin = await Admin.findOne({ email });
  if (!admin || !(await admin.matchPassword(password))) return res.status(401).json({ message: 'Invalid credentials' });
  return res.json({ token: generateToken(admin._id), admin: { id: admin._id, name: admin.name, email: admin.email } });
};
