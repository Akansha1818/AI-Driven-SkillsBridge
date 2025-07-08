"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LearnerRegister() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '', skills: [], interests: [], location: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'skills' || name === 'interests') {
      const arr = value.split(',').map(item => item.trim()).filter(Boolean);
      setForm(prev => ({ ...prev, [name]: arr }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
e.preventDefault();
    try {
      const res = await axios.post('/api/learner/register', form);
      alert("Registration successful!");
      router.push('/learner/login');
    } catch (err) {
      const msg = err?.response?.data?.error || "Something went wrong";
      alert(msg);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-green-600">Learner Registration</h1>

        <label className="block mb-4">
          <span className="text-gray-700">Full Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500"
          />
        </label>

        <label className="block mb-4">
          <span className="text(gray-700)">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Location</span>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Skills (comma-separated)</span>
          <input
            type="text"
            name="skills"
            placeholder="e.g. HTML, CSS, JavaScript"
            value={form.skills.join(', ')}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500"
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700">Interests (comma-separated)</span>
          <input
            type="text"
            name="interests"
            placeholder="e.g. Machine Learning, Cybersecurity"
            value={form.interests.join(', ')}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500"
          />
        </label>

        <button
          type="submit"
          className="w-full py-2 bg-green-600 text-white rounded-full hover(bg-green-700) transition"
        >
          Register
        </button>
      </form>
    </main>
  );
}