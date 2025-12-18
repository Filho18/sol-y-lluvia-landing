import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PergolaCtaSection from '@/components/pergola/PergolaCtaSection';
import PergolaInfoSection from '@/components/pergola/PergolaInfoSection';

const PergolasBioclimaticas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PergolaCtaSection />
        <PergolaInfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default PergolasBioclimaticas;
