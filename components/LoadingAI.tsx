import React from 'react';

export default function LoadingAI() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="flex gap-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-3 h-3 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-3 h-3 rounded-full bg-pink-500 animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
      <div className="text-white/80 text-sm">AI is thinking...</div>
    </div>
  );
}
