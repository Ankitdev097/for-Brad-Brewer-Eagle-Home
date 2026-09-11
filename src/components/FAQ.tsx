import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Do people actually trust enough to talk to AI?",
      answer: "Yes. Conversational AI is now so advanced that most callers don't even realize they aren't speaking to a human. It's fluid, handles interruptions gracefully, and sounds completely natural, establishing trust immediately."
    },
    {
      question: "How does it handle complex real estate questions?",
      answer: "It follows a specific, customized script designed to qualify the lead and book an appointment for you to handle the complex nuances. It doesn't guess; it captures intent and secures the meeting so you can close the deal."
    },
    {
      question: "Why are you offering to set this up for free?",
      answer: "I want to prove the value upfront. We jump on a quick 9-minute call, and I help you install it at no cost. If it transforms your business and saves you time, we can discuss a longer-term partnership later."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-4 tracking-tight">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-stone-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-stone-50 transition-colors"
      >
        <span className="font-medium text-stone-900 pr-8">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-stone-400 shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-stone-400 shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-0 text-stone-500 leading-relaxed bg-white">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
