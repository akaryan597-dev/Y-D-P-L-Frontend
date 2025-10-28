'use client';

import { useEffect, useState } from 'react';

type Product = {
  _id: string;
  name: string;
  price: number;
  unit: string;
  imageUrl: string;
};

export default function OrderNow() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<{ product: Product; qty: number }[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product: Product) => {
    const existing = cart.find(item => item.product._id === product._id);
    if (existing) {
      existing.qty += 1;
    } else {
      setCart([...cart, { product, qty: 1 }]);
    }
  };

  const updateQty = (id: string, qty: number) => {
    setCart(cart.map(item =>
      item.product._id === id ? { ...item, qty } : item
    ));
  };

  const removeItem = (id: string) => {
    setCart(cart.filter(item => item.product._id !== id));
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  const generateWhatsAppMessage = () => {
    let message = `🛒 *New Order from Yadukul Dairy Website*\n\n`;
    cart.forEach(item => {
      message += `• ${item.product.name} - Rs ${item.product.price}/${item.product.unit} × ${item.qty} = Rs ${item.product.price * item.qty}\n`;
    });
    message += `\n*Total: Rs ${totalAmount}*\n\nPlease confirm delivery address.`;
    return encodeURIComponent(message);
  };

  const whatsappLink = `https://wa.me/919654314000?text=${generateWhatsAppMessage()}`;

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Order Products</h2>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {products.map(product => (
          <div key={product._id} className="bg-gray-800 rounded-lg p-4 shadow">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-400">Rs {product.price}/- per {product.unit}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      {cart.length > 0 && (
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Your Cart</h3>
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.product._id} className="flex justify-between items-center bg-gray-800 p-4 rounded">
                <div>
                  <p className="font-semibold">{item.product.name}</p>
                  <p className="text-gray-400">Rs {item.product.price} × {item.qty} = Rs {item.product.price * item.qty}</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    value={item.qty}
                    onChange={(e) => updateQty(item.product._id, parseInt(e.target.value))}
                    className="w-16 px-2 py-1 rounded bg-gray-700 text-white"
                  />
                  <button
                    onClick={() => removeItem(item.product._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total + Confirm */}
          <div className="text-right mt-6">
            <p className="text-lg font-semibold mb-2">Total: Rs {totalAmount}</p>
            <button
              onClick={handlePlaceOrder}
              className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
            >
              📲 Place Order via WhatsApp
            </button>
          </div>

          {/* Confirmation Message */}
          {orderPlaced && (
            <div className="mt-6 text-green-400 font-semibold text-center">
              ✅ Order placed successfully. Awaiting delivery confirmation.
            </div>
          )}
        </div>
      )}
    </section>
  );
}
