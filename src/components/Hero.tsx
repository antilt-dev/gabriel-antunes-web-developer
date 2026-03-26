import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import { useLanguage } from '../hooks/useLanguage';

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

function useTypingLoop(words: string[], typeSpeed = 80, eraseSpeed = 40, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let idx = 0;
    let charIdx = 0;
    let typing = true;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const word = words[idx];
      if (typing) {
        charIdx++;
        setDisplayed(word.slice(0, charIdx));
        setIsTyping(true);
        if (charIdx >= word.length) {
          typing = false;
          timer = setTimeout(tick, pauseMs);
          return;
        }
        timer = setTimeout(tick, typeSpeed);
      } else {
        charIdx--;
        setDisplayed(word.slice(0, charIdx));
        setIsTyping(false);
        if (charIdx <= 0) {
          typing = true;
          idx = (idx + 1) % words.length;
          timer = setTimeout(tick, 400);
          return;
        }
        timer = setTimeout(tick, eraseSpeed);
      }
    }

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [words, typeSpeed, eraseSpeed, pauseMs]);

  return { displayed, isTyping };
}

export default function Hero() {
  const { t } = useLanguage();
  const name = useTypingEffect('Gabriel Antunes', 70, 400);
  const role = useTypingLoop(t.hero.roles as unknown as string[], 80, 40, 2000);

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/mAg8UyDt_sw?autoplay=1&mute=1&loop=1&playlist=mAg8UyDt_sw&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&playsinline=1"
          className="absolute top-1/2 left-1/2 w-[180vw] h-[180vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ minWidth: '100%', minHeight: '100%' }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Hero background video"
          frameBorder="0"
        />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-2xl"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary-foreground/90 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {t.hero.available}
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-heading font-extrabold text-primary-foreground leading-tight">
            {name.displayed}
            <span className={`inline-block w-[3px] h-[0.85em] bg-accent ml-1 align-middle ${name.done ? 'animate-pulse' : ''}`} />
            <span className="block text-accent mt-1" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}>
              {role.displayed}
              <span className="inline-block w-[2px] h-[0.85em] bg-accent/70 ml-1 align-middle animate-pulse" />
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 text-primary-foreground/80 max-w-xl text-lg leading-relaxed">
            {t.hero.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary !bg-accent !text-secondary font-bold">
              {t.hero.cta} <ArrowRight size={16} />
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
