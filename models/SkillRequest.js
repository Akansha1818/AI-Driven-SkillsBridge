// models/SkillRequest.js
import mongoose from 'mongoose';

const skillRequestSchema = new mongoose.Schema({
  learnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mentorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  skill: String,
  preferredMode: String,
  preferredTime: String,
  description: String,
  status: {
    type: String,
    enum: ['pending', 'approved', 'completed'],
    default: 'pending',
  },
}, { timestamps: true });

export default mongoose.models.SkillRequest || mongoose.model('SkillRequest', skillRequestSchema);
