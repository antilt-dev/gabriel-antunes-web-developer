import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ArrowUp } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Portfolio />
        <Contact />
      </main>
      <Footer />

      <a
        href="#hero"
        className="fixed right-5 bottom-6 z-50 w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-lift flex items-center justify-center hover:shadow-lift-lg transition-shadow"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </a>
    </div>
  );
}
