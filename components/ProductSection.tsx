'use client';

import { products } from '../data/products';

export default function ProductSection() {
  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow p-4">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover rounded mb-4"
            >
              <source src={product.video} type="video/mp4" />
            </video>
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-300 mb-1">₹{product.price} {product.unit}</p>
            <button
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              onClick={() => {
                const message = `Hi, I want to order:\n\n🧺 ${product.name}\n📦 Quantity: [Enter Quantity]\n📞 Phone: [Your Number]\n🏠 Address: [Your Address]`;
                const encoded = encodeURIComponent(message);
                window.open(`https://wa.me/918439988051?text=${encoded}`, '_blank');
              }}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
