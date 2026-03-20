import React, { useRef } from 'react';

export default function VideoUpload({ onUpload }: { onUpload: (file: File) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white/10 rounded-2xl border border-white/10 shadow-xl">
      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        className="hidden"
        onChange={e => {
          if (e.target.files && e.target.files[0]) onUpload(e.target.files[0]);
        }}
      />
      <button
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-black font-bold shadow hover:opacity-90 transition"
        onClick={() => inputRef.current?.click()}
      >
        Upload Workout Video
      </button>
    </div>
  );
}
