import connectDB from '@/lib/db';
import SkillRequest from '@/models/SkillRequest';

export async function POST(req, { params }) {
  await connectDB();
  const { action } = await req.json();

  if (!['approve', 'reject'].includes(action)) {
    return new Response('Invalid action', { status: 400 });
  }

  const status = action === 'approve' ? 'approved' : 'rejected';
  await SkillRequest.findByIdAndUpdate(params.id, { status });
  return Response.json({ success: true });
}