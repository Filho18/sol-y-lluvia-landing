import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PergolaCtaSection from '@/components/pergola/PergolaCtaSection';
import PergolaInfoSection from '@/components/pergola/PergolaInfoSection';
import PergolaTestimonialsSection from '@/components/pergola/PergolaTestimonialsSection';
import PergolaTypesSection from '@/components/pergola/PergolaTypesSection';
import PergolaContactSection from '@/components/pergola/PergolaContactSection';

const PergolasBioclimaticas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PergolaCtaSection />
        <PergolaInfoSection />
        <PergolaTestimonialsSection />
        <PergolaTypesSection />
        <PergolaContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default PergolasBioclimaticas;
