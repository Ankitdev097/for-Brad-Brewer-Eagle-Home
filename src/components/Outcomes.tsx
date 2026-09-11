import { motion } from 'motion/react';
import { PhoneCall, ShieldCheck, CalendarCheck } from 'lucide-react';

export default function Outcomes() {
  const outcomes = [
    {
      icon: <PhoneCall className="w-6 h-6 text-emerald-600" />,
      title: "Always On, Instantly",
      description: "Answers every inbound call instantly, 24/7. Never put a lead on hold, and never force a motivated seller to leave a voicemail."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Intelligent Qualification",
      description: "Qualifies buyers and sellers naturally over the phone. It sounds and responds so much like a real person that callers won't even notice the difference."
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-emerald-600" />,
      title: "Seamless Booking",
      description: "Once qualified, the AI books the appointment straight into your calendar, effortlessly turning a missed call into a confirmed meeting."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-4 tracking-tight">
            The Experience
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl">
            Imagine a world where every single lead is handled perfectly, even when you're closing a deal at Riverwoods.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
                {outcome.icon}
              </div>
              <h3 className="text-2xl font-medium text-stone-900 mb-3">{outcome.title}</h3>
              <p className="text-stone-500 leading-relaxed text-lg">{outcome.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
