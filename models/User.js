import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['mentor', 'learner'], default: 'learner' },
  skills: [String],
  interests: [String],
  location: String,
  isVerified: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);
