'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-gray-950 text-white shadow z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Yadukul Dairy</h1>
        <div className="flex gap-4">
          <button onClick={() => scrollToSection('about-section')} className="hover:text-blue-400 transition">About Us</button>
          <button onClick={() => scrollToSection('products-section')} className="hover:text-blue-400 transition">Products</button>
          <button onClick={() => scrollToSection('contact-section')} className="hover:text-blue-400 transition">Contact</button>
          <Link href="/cart" className="hover:text-blue-400 transition">🛒 Cart</Link>
        </div>
      </div>
    </motion.nav>
  );
}
