import React from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardStats from './DashboardStats';
import DashboardFeed from './DashboardFeed';
import DashboardGamification from './DashboardGamification';
import DashboardProgress from './DashboardProgress';

export default function DashboardPage() {
  return (
  <main className="min-h-screen bg-linear-to-br from-black via-[#0f172a] to-[#1e293b] text-white">
      <DashboardHeader />
      <section className="max-w-6xl mx-auto px-4 py-8">
        <DashboardStats />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <DashboardFeed />
          </div>
          <div className="space-y-8">
            <DashboardGamification />
            <DashboardProgress />
          </div>
        </div>
      </section>
    </main>
  );
}
