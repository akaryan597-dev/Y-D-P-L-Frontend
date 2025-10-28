'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  const whatsappNumber = '918439988051'; // WhatsApp number for CTA

  const handleOrderClick = () => {
    const message = `Hi Yadukul Dairy 👋,\n\nI would like to place an order. Here are my details:\n\n👤 *Customer Name*: [Your Full Name]\n📞 *Permanent Mobile Number*: [10-digit number]\n🧺 *Products to Order*:\n- [Product 1] — [Quantity]\n- [Product 2] — [Quantity]\n🏠 *Delivery Address*: [Full Address with Landmark]\n\nPlease confirm availability and delivery time. Thank you! 🙏`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank');
  };

  const handleSubscribeClick = () => {
    const message = `Hi Yadukul Dairy 👋,\n\nI’m interested in subscribing to your dairy delivery service. Here are my details:\n\n👤 *Name*: [Your Full Name]\n📞 *Mobile Number*: [10-digit number]\n🏠 *Address*: [Full Address with Landmark]\n📦 *Products*: [Milk/Ghee/Paneer/etc.]\n🗓️ *Subscription Type*: [Daily / Weekly / Monthly]\n⏰ *Preferred Delivery Time*: [Morning / Evening]\n\nPlease confirm the subscription process and payment details. Thank you! 🙏`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section className="relative h-[80vh] text-white flex items-center justify-center overflow-hidden">
      {/* Logo Top-Left */}
      <div className="absolute top-4 left-4 z-50">
        <img
          src="https://res.cloudinary.com/dmiks8umf/image/upload/v1761542982/WhatsApp_Image_2025-10-27_at_10.49.12_AM_uozvib.jpg"
          alt="Yadukul Dairy Logo"
          className="w-14 h-auto rounded-full shadow-lg border border-white"
        />
      </div>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dmiks8umf/video/upload/v1761539970/14562094_3840_2160_30fps_hcscqk.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Yadukul Dairy Private Limited</h1>
        <p className="text-lg sm:text-xl mb-8">Fresh dairy products delivered to your doorstep in Noida 🐄</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleOrderClick}
            className="bg-white text-gray-900 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
          >
            Order Now
          </button>
          <button
            onClick={handleSubscribeClick}
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Subscribe Now
          </button>
        </div>
      </motion.div>
    </section>
  );
}
