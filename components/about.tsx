// frontend/components/about.tsx

'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { HTMLAttributes } from 'react';

export default function About() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto text-left text-gray-300">
      {/* Heading */}
      <motion.div
        {...({} as HTMLMotionProps<'div'>)}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-white mb-4"
      >
        About Us
      </motion.div>

      {/* Logo */}
      <motion.div
        {...({} as HTMLMotionProps<'div'>)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex justify-center mb-6"
      >
        <img
          src="https://res.cloudinary.com/dmiks8umf/image/upload/v1761542387/WhatsApp_Image_2025-10-27_at_10.49.12_AM_lvd2oq.jpg"
          alt="Yadukul Dairy Logo"
          className="w-32 h-auto rounded-full shadow-lg border-2 border-white"
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        {...({} as HTMLMotionProps<'p'>)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl text-center italic mb-6"
      >
        From Village to City, From Cow to Cup. Discover the story behind Yadukul Dairy's commitment to purity, innovation, and trust.
      </motion.p>

      {/* Quote */}
      <motion.blockquote
        {...({} as HTMLMotionProps<'blockquote'>)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-gray-800 p-4 rounded mb-8 border-l-4 border-blue-600 text-white"
      >
        "We didn't just want to sell milk; we wanted to deliver a promise. A promise of uncompromised purity, powered by technology that ensures transparency from our farm to your family's table."
        <br />
        <span className="block mt-2 text-right">— Yadukul Team, Family, Yadukul Dairy Pvt. Ltd.</span>
      </motion.blockquote>

      {/* Sections */}
      <motion.div
        {...({} as HTMLMotionProps<'div'>)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="space-y-10"
      >
        {/* Our Story */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">Our Story</h3>
          <p>
            Yadukul Dairy began with a simple yet powerful vision: to bridge the gap between rural purity and urban demand. Born from generations of dairy farming heritage in the heartland of Uttar Pradesh, we saw a need for milk that was not just fresh, but also trustworthy and handled with the utmost care.
          </p>
          <p className="mt-2">
            We started small, with a handful of our best-bred cows and a commitment to ethical, sustainable farming. Our journey from a local village farm to a trusted name in Noida is a testament to our unwavering focus on quality. We believe that the best dairy products come from happy animals and a clean environment, a principle that guides us every single day.
          </p>
        </div>

        {/* Our Mission */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">Our Mission</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Absolute Purity:</strong> To deliver 100% pure, unadulterated dairy products, free from hormones and preservatives.</li>
            <li><strong>Customer Trust:</strong> To build lasting relationships through transparency, reliability, and exceptional service.</li>
            <li><strong>Innovation & Efficiency:</strong> To leverage technology to streamline our processes, ensuring freshness and timely delivery.</li>
          </ul>
        </div>

        {/* Our Technology */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">Our Technology</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Farm-to-Door Traceability:</strong> Our commitment to transparency means you can trust the journey of your milk, from the farm right to your doorstep.</li>
            <li><strong>Automated Quality Checks:</strong> Our processing units have integrated sensors that continuously monitor for quality, temperature, and consistency.</li>
            <li><strong>Smart Delivery Routing:</strong> Our staff panel uses route optimization to ensure the quickest, most efficient delivery, keeping your products fresh.</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
