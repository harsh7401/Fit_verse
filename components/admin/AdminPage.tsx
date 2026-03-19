import React from 'react';
import AdminHeader from './AdminHeader';
import AdminDashboard from './AdminDashboard';

export default function AdminPage() {
  return (
  <main className="min-h-screen bg-linear-to-br from-black via-[#0f172a] to-[#1e293b] text-white">
      <AdminHeader />
      <section className="max-w-6xl mx-auto px-4 py-8">
        <AdminDashboard />
      </section>
    </main>
  );
}
