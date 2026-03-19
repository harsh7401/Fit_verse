import React from 'react';
import CoursesHeader from './CoursesHeader';
import CoursesList from './CoursesList';

export default function CoursesPage() {
  return (
  <main className="min-h-screen bg-linear-to-br from-black via-[#0f172a] to-[#1e293b] text-white">
      <CoursesHeader />
      <section className="max-w-4xl mx-auto px-4 py-8">
        <CoursesList />
      </section>
    </main>
  );
}
