import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <Suspense fallback={<div className="flex h-screen items-center justify-center"><div className="animate-spin h-8 w-8 border-4 border-indigo-500 border-t-transparent rounded-full" /></div>}>
        <main>
          <Hero />
          <SocialProof />
          <Features />
          <ProductShowcase />
          <Benefits />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTASection />
          <Footer />
        </main>
      </Suspense>
    </div>
  );
}

export default App;