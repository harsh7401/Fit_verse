import React from 'react';

// TODO: Connect to backend feed API and render posts
export default function SocialFeed() {
  return (
    <div className="rounded-xl bg-black/40 backdrop-blur-md p-6 mb-8 shadow-lg border border-white/10">
      <h2 className="text-2xl font-bold mb-4 text-neon-blue">Social Feed</h2>
      <div className="space-y-4">
        {/* Example post */}
  <div className="p-4 rounded-lg bg-linear-to-r from-[#232b3b] to-[#1e293b] border border-white/5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600" />
            <span className="font-semibold">@fituser</span>
            <span className="text-xs text-gray-400 ml-auto">2m ago</span>
          </div>
          <p className="text-white/90">Just finished a killer HIIT session! 💪🔥</p>
        </div>
        {/* More posts will be mapped here */}
      </div>
    </div>
  );
}
