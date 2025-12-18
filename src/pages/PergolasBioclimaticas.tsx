import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PergolaCtaSection from '@/components/pergola/PergolaCtaSection';
import PergolaInfoSection from '@/components/pergola/PergolaInfoSection';
import PergolaTestimonialsSection from '@/components/pergola/PergolaTestimonialsSection';

const PergolasBioclimaticas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PergolaCtaSection />
        <PergolaInfoSection />
        <PergolaTestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default PergolasBioclimaticas;
