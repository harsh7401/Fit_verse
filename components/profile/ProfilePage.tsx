import React from 'react';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import XPBar from '@/components/XPBar';

export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <Card className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User Avatar"
          className="w-32 h-32 rounded-full border-4 border-neon-blue mb-4 shadow-lg"
        />
        <h2 className="text-3xl font-bold mb-2">Alex Johnson</h2>
        <p className="text-white/70 mb-4">@alexfitpro</p>
        <XPBar xp={4200} level={12} />
        <div className="flex gap-2 mt-4">
          <Badge label="Level 12" color="blue" />
          <Badge label="Streak 21d" color="purple" />
          <Badge label="Top 1%" color="yellow" />
        </div>
        <div className="mt-8 w-full grid grid-cols-2 gap-6">
          <Card className="bg-black/30 p-4">
            <div className="text-lg font-bold">Followers</div>
            <div className="text-2xl">2,340</div>
          </Card>
          <Card className="bg-black/30 p-4">
            <div className="text-lg font-bold">Following</div>
            <div className="text-2xl">180</div>
          </Card>
        </div>
      </Card>
    </div>
  );
}
