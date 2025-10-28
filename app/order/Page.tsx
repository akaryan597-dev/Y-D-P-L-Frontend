'use client';

import { useState } from 'react';

export default function OrderPage() {
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `New Order from Yadukul Dairy Website:

👤 Name: ${name}
🧺 Product: ${product}
📦 Quantity: ${quantity}
📞 Phone: ${phone}
🏠 Address: ${address}

Please confirm and schedule delivery.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/919654314000?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-6">Place Your Order</h1>
      <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border p-3 rounded"
        />
        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
          className="w-full border p-3 rounded"
        >
          <option value="">Select Product</option>
          <option value="Cow Milk">Cow Milk</option>
          <option value="Buffalo Milk">Buffalo Milk</option>
          <option value="Paneer">Paneer</option>
          <option value="Ghee">Ghee</option>
          <option value="Curd">Curd</option>
          <option value="Lassi">Lassi</option>
          <option value="Butter">Butter</option>
          <option value="Flavored Milk">Flavored Milk</option>
          <option value="Khoya">Khoya</option>
          <option value="Cream">Cream</option>
          <option value="Chaas">Chaas</option>
        </select>
        <input
          type="text"
          placeholder="Quantity (e.g. 2 Liters)"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          className="w-full border p-3 rounded"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full border p-3 rounded"
        />
        <textarea
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="w-full border p-3 rounded h-24"
        />
        <button
          type="submit"
          className="bg-green-600 text-white font-semibold px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Submit & Send via WhatsApp
        </button>
      </form>
    </div>
  );
}
