import connectDB from "@/lib/db";
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await connectDB();

  try {
    const { name, email, password, skills, interests, location } = await req.json();

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: 'Email already registered' }), {
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: 'mentor',
      skills,
      interests,
      location,
    });

    await newUser.save();

    return new Response(JSON.stringify({ message: 'Mentor registered successfully' }), {
      status: 201,
    });
  } catch (err) {
    console.error('Registration Error:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}

