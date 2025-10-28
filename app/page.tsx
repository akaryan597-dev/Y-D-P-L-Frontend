import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import AboutSection from '../components/about';
import ReviewSection from '../components/reviews';
import ContactSection from '../components/contact';

export default function HomePage() {
  return (
    <main className="bg-gray-900 text-white space-y-20 pt-20">
      <Navbar />
      <HeroSection />
      <section id="products-section"><ProductSection /></section>
      <section id="about-section"><AboutSection /></section>
      <section id="reviews-section"><ReviewSection /></section>
      <section id="contact-section"><ContactSection /></section>
    </main>
  );
}
