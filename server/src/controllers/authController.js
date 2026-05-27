import Admin from '../models/Admin.js';
import { generateToken } from '../utils/token.js';

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin || !(await admin.matchPassword(password))) return res.status(401).json({ message: 'Invalid credentials' });
  res.json({ token: generateToken(admin._id), admin: { id: admin._id, name: admin.name, email: admin.email } });
};
