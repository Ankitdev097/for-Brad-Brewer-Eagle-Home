/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Outcomes from './components/Outcomes';
import Comparison from './components/Comparison';
import Deliverables from './components/Deliverables';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-stone-200 selection:text-stone-900">
      <nav className="fixed top-0 inset-x-0 bg-white/80 backdrop-blur-md border-b border-stone-200 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold text-stone-900 tracking-tight text-lg">
            Agent<span className="text-stone-400">By</span>Design
          </div>
          <div className="text-sm font-medium text-stone-500">
            Client Portal
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <PainPoints />
        <Outcomes />
        <Comparison />
        <Deliverables />
        <FAQ />
        <CTA />
      </main>

      <footer className="bg-white py-8 px-6 text-center border-t border-stone-200">
        <p className="text-stone-400 text-sm">
          Designed specifically for Brad Brewer & Eagle Homes.
        </p>
      </footer>
    </div>
  );
}
