import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from '../config/db.js';
import Admin from '../models/Admin.js';

await connectDB();
const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;
if (!email || !password) throw new Error('Set ADMIN_EMAIL and ADMIN_PASSWORD');
const exists = await Admin.findOne({ email });
if (exists) {
  console.log('Admin exists');
  process.exit(0);
}
await Admin.create({ name: 'Super Admin', email, password });
console.log('Admin created');
process.exit(0);
