"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function MentorDashboard() {
  const [requests, setRequests] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get('/api/mentor/requests');
        setRequests(res.data);
      } catch (err) {
        console.error('Failed to fetch requests', err);
      }
    };
    fetchRequests();
  }, []);

  const handleAction = async (id, action) => {
    try {
      await axios.post(`/api/mentor/request/${id}`, { action });
      setRequests(prev => prev.filter(r => r._id !== id));
    } catch (err) {
      console.error('Action failed', err);
    }
  };

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Mentor Dashboard</h1>
      <h2 className="text-xl font-semibold mb-2">Pending Requests</h2>
      {requests.length === 0 ? (
        <p>No pending requests</p>
      ) : (
        <ul className="space-y-4">
          {requests.map(req => (
            <li key={req._id} className="p-4 border rounded-lg shadow-sm">
              <p><strong>Skill:</strong> {req.skill}</p>
              <p><strong>Learner:</strong> {req.learnerName}</p>
              <p><strong>Preferred Time:</strong> {req.preferredTime}</p>
              <div className="space-x-2 mt-2">
                <button onClick={() => handleAction(req._id, 'approve')} className="bg-green-500 text-white px-3 py-1 rounded">Accept</button>
                <button onClick={() => handleAction(req._id, 'reject')} className="bg-red-500 text-white px-3 py-1 rounded">Reject</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
