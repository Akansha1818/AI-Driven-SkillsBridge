// app/learner/dashboard/page.jsx
"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LearnerDashboard() {
  const [form, setForm] = useState({ skill: '', preferredTime: '', preferredMode: '', description: '' });
  const [requests, setRequests] = useState([]);
  const router = useRouter();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/learner/request', form);
      setRequests([...requests, res.data]);
      setForm({ skill: '', preferredTime: '', preferredMode: '', description: '' });
    } catch (err) {
      console.error('Failed to submit request', err);
    }
  };

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get('/api/learner/myrequests');
        setRequests(res.data);
      } catch (err) {
        console.error('Failed to fetch requests', err);
      }
    };
    fetchRequests();
  }, []);

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Learner Dashboard</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input name="skill" value={form.skill} onChange={handleChange} placeholder="Skill" className="w-full p-2 border rounded" required />
        <input name="preferredTime" value={form.preferredTime} onChange={handleChange} placeholder="Preferred Time" className="w-full p-2 border rounded" />
        <input name="preferredMode" value={form.preferredMode} onChange={handleChange} placeholder="Online/Offline" className="w-full p-2 border rounded" />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Describe your need..." className="w-full p-2 border rounded" rows={3}></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Request Skill</button>
      </form>

      <h2 className="text-xl font-semibold mb-2">My Requests</h2>
      <ul className="space-y-4">
        {requests.map(req => (
          <li key={req._id} className="p-4 border rounded shadow-sm">
            <p><strong>Skill:</strong> {req.skill}</p>
            <p><strong>Status:</strong> {req.status}</p>
            <p><strong>Mentor:</strong> {req.mentorName || 'Not Assigned'}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
