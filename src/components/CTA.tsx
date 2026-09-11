import { useState } from 'react';
import EmailModal from './EmailModal';
import { Mail } from 'lucide-react';

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 px-6 bg-stone-50 border-t border-stone-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-6 tracking-tight">
            Let's get this running for Eagle Homes.
          </h2>
          <p className="text-stone-500 text-lg mb-10 leading-relaxed">
            You have the workflow, but if you'd like a hand, reply to my previous message or click below. Let's schedule a free 9-minute call where I'll personally help you install and customize this at no cost.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-800 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email ankit@agentbydesign.in
          </button>
        </div>
      </section>

      <EmailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        email="ankit@agentbydesign.in" 
      />
    </>
  );
}
