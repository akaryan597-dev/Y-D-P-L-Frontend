'use client';

type Review = {
  customerName: string;
  rating: number;
  text: string;
  date: string;
};

const reviews: Review[] = [
  { customerName: "Ravi Sharma", rating: 5, text: "Milk quality is excellent, always fresh and delivered on time!", date: "2023-06-12" },
  { customerName: "Priya Verma", rating: 4, text: "Paneer is soft and tasty, my kids love it!", date: "2024-01-08" },
  { customerName: "Ankit Mehra", rating: 5, text: "Subscription service is smooth, no delivery issues at all.", date: "2025-03-22" },
  { customerName: "Neha Singh", rating: 5, text: "Ghee has authentic taste, reminds me of village dairy!", date: "2023-11-03" },
  { customerName: "Saurabh Jain", rating: 4, text: "Packaging is neat and delivery is always on time.", date: "2024-07-19" },
  { customerName: "Meena Kumari", rating: 5, text: "Curd is thick and creamy, just like homemade!", date: "2025-01-27" },
  { customerName: "Amit Tiwari", rating: 5, text: "Customer support is responsive and helpful.", date: "2023-09-14" },
  { customerName: "Divya Rawat", rating: 4, text: "Love the taste of their toned milk. Highly recommended!", date: "2024-04-05" },
  { customerName: "Karan Malhotra", rating: 5, text: "Their delivery timing is perfect for my morning routine.", date: "2025-06-30" },
  { customerName: "Sneha Kapoor", rating: 5, text: "Paneer is fresh and doesn't crumble. Great quality!", date: "2023-12-21" },
  { customerName: "Rahul Bansal", rating: 4, text: "Milk is good, but I wish they had more subscription options.", date: "2024-03-10" },
  { customerName: "Tanya Joshi", rating: 5, text: "Ghee smells divine and tastes even better!", date: "2025-08-16" },
  { customerName: "Vikram Sethi", rating: 5, text: "I switched from store milk to Yadukul and never looked back.", date: "2023-07-28" },
  { customerName: "Pooja Mishra", rating: 4, text: "Paneer is great, but delivery was late once.", date: "2024-10-02" },
  { customerName: "Nikhil Rao", rating: 5, text: "Their full cream milk is unbeatable!", date: "2025-02-11" },
  { customerName: "Ruchi Agarwal", rating: 5, text: "Love the eco-friendly packaging!", date: "2023-05-06" },
  { customerName: "Manish Dubey", rating: 4, text: "Good service overall, but app UI can improve.", date: "2024-08-24" },
  { customerName: "Shalini Thakur", rating: 5, text: "My family loves their dahi. Thick and rich!", date: "2025-04-14" },
  { customerName: "Deepak Chauhan", rating: 5, text: "Milk quality is consistent. No complaints!", date: "2023-10-18" },
  { customerName: "Isha Mehta", rating: 5, text: "Their ghee is pure gold. I use it daily!", date: "2024-12-09" },
];

export default function Reviews() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Customer Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-white">{review.customerName}</h3>
            <p className="text-yellow-400">⭐ {review.rating}/5</p>
            <p className="text-gray-300 mt-2 italic">“{review.text}”</p>
            <p className="text-xs text-gray-500 mt-3">{new Date(review.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
