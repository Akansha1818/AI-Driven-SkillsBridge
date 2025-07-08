import connectDB from '@/lib/db';
import SkillRequest from '@/models/SkillRequest';
import User from '@/models/User';
import { getServerSession } from 'next-auth';
import { authOptions } from "@/lib/auth";

export async function GET() {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) return new Response('Unauthorized', { status: 401 });

  const mentor = await User.findOne({ email: session.user.email });
  const requests = await SkillRequest.find({ mentorId: mentor._id, status: 'pending' }).populate('learnerId');

  const formatted = requests.map(req => ({
    _id: req._id,
    skill: req.skill,
    learnerName: req.learnerId.name,
    preferredTime: req.preferredTime
  }));

  return Response.json(formatted);
} 