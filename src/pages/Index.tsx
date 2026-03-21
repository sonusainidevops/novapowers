import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Franchise } from '@/components/Franchise';
import { Branches } from '@/components/Branches';
import { Gallery } from '@/components/Gallery';
import { Career } from '@/components/Career';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Franchise />
        <Branches />
        <Gallery />
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
