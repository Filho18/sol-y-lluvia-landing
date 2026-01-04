import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToldoCtaSection from '@/components/toldo/ToldoCtaSection';
import ToldoInfoSection from '@/components/toldo/ToldoInfoSection';
import ToldoTestimonialsSection from '@/components/toldo/ToldoTestimonialsSection';
import ToldoTypesSection from '@/components/toldo/ToldoTypesSection';
import ToldoContactSection from '@/components/toldo/ToldoContactSection';

const Toldos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ToldoCtaSection />
        <ToldoInfoSection />
        <ToldoTestimonialsSection />
        <ToldoTypesSection />
        <ToldoContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Toldos;

