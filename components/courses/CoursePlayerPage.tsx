import React from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function CoursePlayerPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Card className="p-8 flex flex-col md:flex-row gap-8">
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          controls
          className="w-full md:w-2/3 rounded-2xl shadow-xl mb-6 md:mb-0"
          poster="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80"
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Ultimate HIIT Workout</h2>
            <div className="text-xl text-white/80 mb-4">By Coach Emily</div>
            <p className="text-white/70 mb-6">A high-intensity interval training course to burn fat and build endurance. Includes warmup, main sets, and cooldown.</p>
          </div>
          <Button href="/courses" variant="primary" size="lg">Back to Courses</Button>
        </div>
      </Card>
    </div>
  );
}
