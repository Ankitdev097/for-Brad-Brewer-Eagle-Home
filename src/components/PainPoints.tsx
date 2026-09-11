import { motion } from 'motion/react';
import { Voicemail, Clock, Users } from 'lucide-react';

export default function PainPoints() {
  const points = [
    {
      icon: <Voicemail className="w-6 h-6 text-rose-500" />,
      title: "The Voicemail Trap",
      description: "Letting new leads go to voicemail while you're with clients or at a showing. Modern buyers rarely leave messages; they just call the next agent."
    },
    {
      icon: <Clock className="w-6 h-6 text-rose-500" />,
      title: "After-Hours Inquiries",
      description: "Missing calls after hours or on weekends when motivated buyers and sellers are actively browsing Zillow and real estate listings."
    },
    {
      icon: <Users className="w-6 h-6 text-rose-500" />,
      title: "Lost Opportunities",
      description: "Losing highly qualified buyers to the first agent who actually answers the phone. Speed to lead is the most critical metric in real estate."
    }
  ];

  return (
    <section className="py-20 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-4 tracking-tight">
            The Reality of Real Estate
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Marketing works, but when you're busy running a successful team, answering every single call is impossible. Here is what happens when you miss them:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100"
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center mb-6">
                {point.icon}
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">{point.title}</h3>
              <p className="text-stone-500 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
