import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  name: String,
  email: String,
  title: String,
  category: String,
  content: String,
  image: String,
  phone: String,
  message: String,
  status: { type: String, default: 'new' },
  metaTitle: String,
  metaDescription: String,
  tags: [String],
  date: Date,
  location: String,
  applicationLink: String
}, { timestamps: true });
export default mongoose.model('Event', schema);
