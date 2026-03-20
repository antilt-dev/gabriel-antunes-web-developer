import { motion } from 'framer-motion';
import { fadeUp, stagger, hoverScale } from '../lib/animations';
import { Monitor, Plug, Zap, Accessibility } from 'lucide-react';
import type { Service } from '../types';

const ICONS: Record<string, React.ReactNode> = {
  'web-apps': <Monitor size={22} />,
  'api': <Plug size={22} />,
  'perf': <Zap size={22} />,
  'a11y': <Accessibility size={22} />,
};

const SERVICES: Service[] = [
  { id: 'web-apps', title: 'Web Applications', description: 'Scalable apps with React + TypeScript' },
  { id: 'a11y', title: 'Accessibility', description: 'WCAG 2.1 AA compliance' },
  { id: 'api', title: 'APIs & Integrations', description: 'REST, GraphQL, and serverless' },
  { id: 'perf', title: 'Performance', description: 'Lighthouse-first improvements' },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="font-heading font-bold text-foreground"
        >
          Services
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-2 text-muted-foreground max-w-lg">
          End-to-end solutions to turn your ideas into high-quality digital products.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SERVICES.map((s) => (
            <motion.article
              key={s.id}
              variants={fadeUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="bg-card rounded-lg p-6 shadow-lift border border-border transition-shadow hover:shadow-lift-lg"
            >
              <motion.div variants={hoverScale}>
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {ICONS[s.id]}
                </div>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.description}</p>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
