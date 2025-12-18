import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PergolaHeroSection from '@/components/pergola/PergolaHeroSection';
import PergolaCtaSection from '@/components/pergola/PergolaCtaSection';
import PergolaServiceSection from '@/components/pergola/PergolaServiceSection';
import PergolasBenefitsSection from '@/components/pergola/PergolasBenefitsSection';

const PergolasBioclimaticas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PergolaHeroSection />
        <PergolaCtaSection />
        <PergolaServiceSection />
        <PergolasBenefitsSection />
      </main>
      <Footer />
    </div>
  );
};

export default PergolasBioclimaticas;
