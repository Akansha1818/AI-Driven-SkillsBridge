"use client";

import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">
        Welcome to SkillsBridge Dashboard
      </h1>
      <p className="text-lg text-indigo-600 mb-12">
        Connect, Learn, and Grow with our community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <section className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mentor</h2>
          <p className="text-gray-600 mb-6">
            Share your expertise and guide learners.
          </p>
          <Link href="/mentor/register" className="px-6 py-2 mb-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
            Register as Mentor
          </Link>
          <Link href="/mentor/login" className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition">
            Login as Mentor
          </Link>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Learner</h2>
          <p className="text-gray-600 mb-6">
            Join courses and grow your skills.
          </p>
          <Link href="/learner/register" className="px-6 py-2 mb-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
            Register as Learner
          </Link>
          <Link href="/learner/login" className="px-6 py-2 border border-green-600 text-green-600 rounded-full hover:bg-green-50 transition">
            Login as Learner
          </Link>
        </section>
      </div>
    </main>
  );
}
