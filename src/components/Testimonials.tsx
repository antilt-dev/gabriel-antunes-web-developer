import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  { id: 1, quote: 'Delivered a robust app on time. Excellent communication.', name: 'Ana P.', role: 'Product Manager' },
  { id: 2, quote: 'Performance improvements cut load times in half.', name: 'Lucas M.', role: 'CTO' },
  { id: 3, quote: 'Clean, accessible code. Highly recommended.', name: 'Mariana R.', role: 'Founder' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-muted">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="font-heading font-bold text-foreground">
          What Clients Say
        </motion.h2>

        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.blockquote key={t.id} variants={fadeUp} className="bg-card p-6 rounded-lg shadow-lift border border-border relative">
              <Quote size={28} className="text-primary/15 absolute top-4 right-4" />
              <p className="text-foreground leading-relaxed">"{t.quote}"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
