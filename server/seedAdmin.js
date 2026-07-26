import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "./models/Admin.js";

dotenv.config();

await mongoose.connect(process.env.MONGODB_URI);

const exists = await Admin.findOne({
  email: "admin@prakrati.com",
});

if (exists) {
  console.log("Admin already exists");
  process.exit();
}

await Admin.create({
  name: "Administrator",
  email: "admin@prakrati.com",
  password: "Admin@123",
});

console.log("✅ Admin Created Successfully");
process.exit();
