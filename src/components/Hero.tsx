import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary to-accent/20" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-2xl"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary-foreground/90 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Disponível para novos projetos
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-heading font-extrabold text-primary-foreground leading-tight">
            Gabriel Antunes
            <span className="block text-accent mt-1" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}>
              Web Developer
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 text-primary-foreground/80 max-w-xl text-lg leading-relaxed">
            Aplicações web rápidas, acessíveis e prontas para produção.
            React, TypeScript, Tailwind e arquitetura focada em performance.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary !bg-accent !text-secondary font-bold">
              Consulta Gratuita <ArrowRight size={16} />
            </a>
            <a href="#portfolio" className="btn-ghost !border-primary-foreground/20 !text-primary-foreground hover:!bg-primary-foreground/10">
              Ver Portfolio
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex gap-4">
            <a
              href="https://github.com/antilt-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-antunes-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
