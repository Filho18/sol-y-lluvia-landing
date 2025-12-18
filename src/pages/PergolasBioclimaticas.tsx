import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PergolaCtaSection from '@/components/pergola/PergolaCtaSection';
import PergolaInfoSection from '@/components/pergola/PergolaInfoSection';
import PergolaTestimonialsSection from '@/components/pergola/PergolaTestimonialsSection';
import PergolaAboutSection from '@/components/pergola/PergolaAboutSection';
import PergolaTypesSection from '@/components/pergola/PergolaTypesSection';

const PergolasBioclimaticas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PergolaCtaSection />
        <PergolaInfoSection />
        <PergolaTestimonialsSection />
        <PergolaTypesSection />
        <PergolaAboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default PergolasBioclimaticas;
