import mongoose from "mongoose";

const allowedUserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true, 
  }
);

const AllowedUser =
  mongoose.models.AllowedUser || mongoose.model("AllowedUser", allowedUserSchema);

export default AllowedUser;
