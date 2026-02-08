"use client";

export default function Footer() {
  return (
    <footer className="border-t border-indigo-500/10 py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Shreya Jaiswal. Built with Next.js &
          Three.js
        </p>
      </div>
    </footer>
  );
}
