import React from 'react';
import HeroSection from './HeroSection';
import Services from './Services';
import HowWeWork from './HowWeWork';
import FireSafetySection from './FireSafetySection';
import ProfessionalCareSection from './ProfessionalCareSection';

export default function Landing() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-sky-300/40">
      <HeroSection />
      <FireSafetySection />
      <Services />
      <HowWeWork />
      <ProfessionalCareSection />
    </main>
  );
}
