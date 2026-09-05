import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema(
  {
    ip: {
      type: String,
      required: true,
      index: true,
    },

    userAgent: {
      type: String,
      default: "",
    },

    page: {
      type: String,
      default: "/",
    },

    country: {
      type: String,
      default: "",
    },

    device: {
      type: String,
      enum: ["mobile", "desktop", "tablet", "unknown"],
      default: "unknown",
    },
  },
  {
    timestamps: true,
  }
);

visitorSchema.index({ ip: 1, userAgent: 1 });

export default mongoose.model("Visitor", visitorSchema);
