import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-24 px-6 bg-stone-900 text-stone-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight text-white">
            The Economics
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            How your custom AI solution stacks up against hiring a traditional in-house receptionist.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional Hire */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-stone-800/50 rounded-3xl p-8 border border-stone-700/50"
          >
            <h3 className="text-xl font-medium mb-6 text-stone-300">Traditional Employee</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-stone-400">
                <X className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>Costs $3,000 - $4,000+ per month</span>
              </div>
              <div className="flex items-start gap-3 text-stone-400">
                <X className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>Only available 9 AM to 5 PM, Monday to Friday</span>
              </div>
              <div className="flex items-start gap-3 text-stone-400">
                <X className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>Can only handle one phone call at a time</span>
              </div>
              <div className="flex items-start gap-3 text-stone-400">
                <X className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>Requires constant training, management, and sick days</span>
              </div>
            </div>
          </motion.div>

          {/* AI Receptionist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-bl-xl">
              My Free Offer
            </div>
            <h3 className="text-xl font-medium mb-6 text-stone-900">Custom AI Receptionist</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-stone-700">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="font-medium">$0 setup cost from me to get started</span>
              </div>
              <div className="flex items-start gap-3 text-stone-700">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Works 24 hours a day, 7 days a week, 365 days a year</span>
              </div>
              <div className="flex items-start gap-3 text-stone-700">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Can handle infinite simultaneous calls perfectly</span>
              </div>
              <div className="flex items-start gap-3 text-stone-700">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Executes your exact script flawlessly every single time</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
