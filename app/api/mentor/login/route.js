import connectDB from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await connectDB();
  const { email, password } = await req.json();
  const user = await User.findOne({ email, role: 'mentor' });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return new Response('Invalid credentials', { status: 400 });
  }

  return Response.json({ success: true, user });
}