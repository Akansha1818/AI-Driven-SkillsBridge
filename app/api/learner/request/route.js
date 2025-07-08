import connectDB from '@/lib/db';
import SkillRequest from '@/models/SkillRequest';
import User from '@/models/User';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function POST(req) {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) return new Response('Unauthorized', { status: 401 });

  const learner = await User.findOne({ email: session.user.email });
  const body = await req.json();

  const newReq = await SkillRequest.create({
    learnerId: learner._id,
    skill: body.skill,
    preferredTime: body.preferredTime,
    preferredMode: body.preferredMode,
    description: body.description,
  });

  return Response.json(newReq);
}
