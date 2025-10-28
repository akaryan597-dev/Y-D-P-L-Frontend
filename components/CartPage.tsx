'use client';

import { useEffect, useState } from 'react';

type CartItem = {
  _id: string;
  name: string;
  price: number;
  unit: string;
  imageUrl: string;
  qty: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(stored);
  }, []);

  const removeItem = (id: string) => {
    const updated = cart.filter(item => item._id !== id);
    localStorage.setItem('cart', JSON.stringify(updated));
    setCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-left">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item._id} className="bg-gray-800 p-4 rounded flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-400">Rs {item.price} × {item.qty} = Rs {item.price * item.qty}</p>
              </div>
              <button
                onClick={() => removeItem(item._id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right text-xl font-bold mt-4">Total: Rs {total}</div>
        </div>
      )}
    </section>
  );
}
