import React from 'react';
import Card from '@/components/Card';

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <Card className="p-8">
        <h2 className="text-3xl font-bold mb-6">Settings</h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input type="text" className="w-full p-3 rounded-xl bg-black/30 border border-white/10 text-white" defaultValue="Alex Johnson" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input type="email" className="w-full p-3 rounded-xl bg-black/30 border border-white/10 text-white" defaultValue="alex@email.com" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input type="password" className="w-full p-3 rounded-xl bg-black/30 border border-white/10 text-white" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-black font-bold shadow hover:opacity-90 transition">Save Changes</button>
        </form>
      </Card>
    </div>
  );
}
