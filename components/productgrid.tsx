'use client';

import { useEffect, useState } from 'react';

type Product = {
  _id: string;
  name: string;
  price: number;
  unit: string;
  imageUrl: string;
  category: string;
};

const categories = ['All', 'Milk', 'Ghee', 'Paneer'];
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: '₹0 – ₹50', min: 0, max: 50 },
  { label: '₹51 – ₹100', min: 51, max: 100 },
  { label: '₹101 – ₹200', min: 101, max: 200 },
];

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    let result = [...products];

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    const price = priceRanges.find(p => p.label === selectedPrice);
    if (price && price.label !== 'All') {
      result = result.filter(p => p.price >= price.min && p.price <= price.max);
    }

    setFiltered(result);
  }, [selectedCategory, selectedPrice, products]);

  const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find((item: any) => item._id === product._id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart`);
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          {priceRanges.map(p => (
            <option key={p.label} value={p.label}>{p.label}</option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.map(product => (
          <div key={product._id} className="bg-gray-800 rounded-lg p-4 shadow hover:scale-105 transition">
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
    </section>
  );
}
