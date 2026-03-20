import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import { X, ExternalLink } from 'lucide-react';

const ITEMS = [
  { id: 'p1', title: 'E-commerce Platform', label: 'Web App', color: 'from-primary to-secondary' },
  { id: 'p2', title: 'Design System', label: 'UI/UX', color: 'from-accent to-secondary' },
  { id: 'p3', title: 'Payment Gateway', label: 'API', color: 'from-secondary to-primary' },
  { id: 'p4', title: 'Dashboard Analytics', label: 'Performance', color: 'from-primary/80 to-accent' },
  { id: 'p5', title: 'Healthcare Portal', label: 'Acessibilidade', color: 'from-accent to-primary' },
  { id: 'p6', title: 'Code Audit Tool', label: 'Consultoria', color: 'from-secondary to-accent' },
];

export default function Portfolio() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const selectedItem = ITEMS.find((i) => i.id === lightbox);

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="font-heading font-bold text-foreground"
        >
          Portfolio
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-2 text-muted-foreground">
          Alguns projetos recentes que demonstram minha abordagem.
        </motion.p>

        <motion.div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {ITEMS.map((item) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              className="group rounded-lg overflow-hidden shadow-lift border border-border cursor-pointer bg-card"
              onClick={() => setLightbox(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(item.id)}
            >
              <div className={`h-44 bg-gradient-to-br ${item.color} flex items-end p-5`}>
                <div>
                  <div className="font-semibold text-primary-foreground">{item.title}</div>
                  <div className="text-xs text-primary-foreground/80 mt-0.5">{item.label}</div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Ver detalhes</span>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <AnimatePresence>
          {lightbox && selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-secondary/70 backdrop-blur-sm p-4"
              onClick={() => setLightbox(null)}
              role="dialog"
              aria-modal="true"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-card rounded-xl p-6 max-w-lg w-full shadow-lift-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-foreground text-lg">{selectedItem.title}</h3>
                  <button onClick={() => setLightbox(null)} className="p-1 rounded-md hover:bg-muted transition-colors" aria-label="Fechar">
                    <X size={18} />
                  </button>
                </div>
                <div className={`h-48 rounded-lg bg-gradient-to-br ${selectedItem.color}`} />
                <p className="mt-4 text-sm text-muted-foreground">
                  Projeto desenvolvido com React, TypeScript e Tailwind CSS. Foco em performance, acessibilidade e experiência do usuário.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
