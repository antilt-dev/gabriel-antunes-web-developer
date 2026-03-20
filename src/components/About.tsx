import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../lib/animations';
import { ShieldCheck, Star, Clock } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: <ShieldCheck size={20} />, title: 'Qualidade Garantida', desc: 'Padrões profissionais e código revisado.' },
  { icon: <Star size={20} />, title: 'Alta Satisfação', desc: 'Clientes recorrentes e projetos bem-sucedidos.' },
  { icon: <Clock size={20} />, title: 'Experiência Sólida', desc: 'Sistemas em produção para startups e empresas.' },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="font-heading font-bold text-foreground">
          Por que Confiam em Mim
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {HIGHLIGHTS.map((h, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-card p-5 rounded-lg shadow-lift border border-border">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-3">
                {h.icon}
              </div>
              <h4 className="font-semibold text-foreground">{h.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{h.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-8 text-muted-foreground leading-relaxed max-w-2xl"
        >
          Foco em construir aplicações web manuteníveis, acessíveis e de alta performance.
          Colaboro de perto com equipes de produto para entregar funcionalidades rapidamente,
          mantendo a qualidade a longo prazo.
        </motion.p>
      </div>
    </section>
  );
}
