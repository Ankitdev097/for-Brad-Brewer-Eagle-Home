import { motion } from 'motion/react';
import { Download, FolderKanban, Settings, FileText } from 'lucide-react';

export default function Deliverables() {
  return (
    <section id="deliverables" className="py-24 px-6 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-4 tracking-tight">
            Your Custom Workflow
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            I've packaged the complete system specifically for Eagle Homes. Here is exactly what is inside your private drive.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-stone-200"
        >
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                <FolderKanban className="w-5 h-5 text-stone-700" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-stone-900 mb-1">Complete AI Assistant</h4>
                <p className="text-stone-500 text-sm leading-relaxed">Built with Retell AI, featuring a custom script designed for real estate lead qualification.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                <Settings className="w-5 h-5 text-stone-700" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-stone-900 mb-1">n8n Automations</h4>
                <p className="text-stone-500 text-sm leading-relaxed">Two powerful workflows included: Automated Appointment Scheduling and intelligent Call Summaries.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-stone-700" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-stone-900 mb-1">Setup Documentation</h4>
                <p className="text-stone-500 text-sm leading-relaxed">A comprehensive installation guide, setup diagram, and deployment checklist.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="https://drive.google.com/drive/folders/1eTBaFmT5UWUJq4Pgnt6yhEtCowOPek-8?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-700 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Eagle Homes Workflow
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
