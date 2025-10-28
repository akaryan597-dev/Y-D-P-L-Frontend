'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Yadukul Dairy Pvt. Ltd. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="mailto:yadukuldairyprtivatelimited@gmail.com" className="hover:text-white transition">Email</a>
          <a href="https://wa.me/919654314000" target="_blank" className="hover:text-white transition">WhatsApp</a>
          <a href="tel:+918439988051" className="hover:text-white transition">Call</a>
        </div>
      </div>
    </footer>
  );
}
