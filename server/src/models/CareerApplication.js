import mongoose from "mongoose";

const CareerApplicationSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    position: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "CareerApplication",
  CareerApplicationSchema
);
