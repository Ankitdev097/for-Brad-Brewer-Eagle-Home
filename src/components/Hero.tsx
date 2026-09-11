import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const scrollToDeliverables = () => {
    document.getElementById('deliverables')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Prepared exclusively for Brad Brewer & Eagle Homes
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-stone-900 mb-8 leading-[1.15]"
        >
          An AI Call-Handling Blueprint Built Specifically For Your Real Estate Business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-stone-500 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          While you're running ads for listings like 4300 20th Place or out on showings, every inbound lead should be captured, qualified, and booked. I analyzed your digital presence and built a bespoke AI Receptionist to do exactly that.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <button
            onClick={scrollToDeliverables}
            className="group flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-stone-800 transition-all active:scale-95"
          >
            See Your Custom Build
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
