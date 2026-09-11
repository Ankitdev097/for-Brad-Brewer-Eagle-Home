import { motion, AnimatePresence } from 'motion/react';
import { Copy, Mail, X, Check } from 'lucide-react';
import { useState } from 'react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export default function EmailModal({ isOpen, onClose, email }: EmailModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl"
            >
              <div className="p-6 text-center border-b border-stone-100 relative">
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-600 rounded-full hover:bg-stone-50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-stone-600" />
                </div>
                <h3 className="text-xl font-medium text-stone-900 mb-2">Let's Connect</h3>
                <p className="text-stone-500 text-sm">Choose how you'd like to reach out.</p>
              </div>
              
              <div className="p-4 space-y-2 bg-stone-50">
                <a
                  href={`mailto:${email}`}
                  className="w-full flex items-center justify-center gap-2 bg-stone-900 text-white px-6 py-3.5 rounded-xl font-medium hover:bg-stone-800 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Open Email App
                </a>
                <button
                  onClick={handleCopy}
                  className="w-full flex items-center justify-center gap-2 bg-white border border-stone-200 text-stone-700 px-6 py-3.5 rounded-xl font-medium hover:bg-stone-50 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied to clipboard!' : 'Copy Email Address'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
