import { generateToken } from '../utils/token.js';

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email and password required' });

  return res.json({
    token: generateToken('mock-admin'),
    admin: { id: 'mock-admin', name: 'Fallback Admin', email }
  });
};
