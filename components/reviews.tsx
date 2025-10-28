'use client';

import { useEffect, useState } from 'react';

type Review = {
  _id: string;
  customerName: string;
  rating: number;
  text: string;
  date: string;
};

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/reviews`)
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review._id} className="bg-gray-800 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{review.customerName}</h3>
            <p className="text-yellow-400">⭐ {review.rating}/5</p>
            <p className="text-gray-300 mt-2">{review.text}</p>
            <p className="text-xs text-gray-500 mt-1">{new Date(review.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
