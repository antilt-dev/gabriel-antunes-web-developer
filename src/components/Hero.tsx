import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';

function useTypingEffect(text: string, speed = 80, delay = 0) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed('');
    setDone(false);
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
}

export default function Hero() {
  const name = useTypingEffect('Gabriel Antunes', 70, 400);
  const title = useTypingEffect('Web Developer', 70, 1600);

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-secondary" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-2xl"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary-foreground/90 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for new projects
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-heading font-extrabold text-primary-foreground leading-tight">
            {name.displayed}
            <span className={`inline-block w-[3px] h-[0.85em] bg-accent ml-1 align-middle ${name.done ? 'animate-pulse' : ''}`} />
            <span className="block text-accent mt-1" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}>
              {title.displayed}
              {name.done && <span className={`inline-block w-[2px] h-[0.85em] bg-accent/70 ml-1 align-middle ${title.done ? 'animate-pulse' : ''}`} />}
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 text-primary-foreground/80 max-w-xl text-lg leading-relaxed">
            Fast, accessible, production-ready web applications.
            React, TypeScript, Tailwind, and performance-first architecture.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary !bg-accent !text-secondary font-bold">
              Free Consultation <ArrowRight size={16} />
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
