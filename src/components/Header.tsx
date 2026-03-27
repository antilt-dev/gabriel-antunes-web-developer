import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { useNavigate } from 'react-router-dom';
import logoLight from '../assests/new-logo-light.png';
import logoDark from '../assests/new-logo-dark.png'

export default function Header() {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDark(true);
    }
  }, []);

  function toggleLang() {
    if (lang === 'en') {
      navigate('/pt-br');
    } else {
      navigate('/');
    }
  }

  const NAV_LINKS = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.testimonials, href: '#testimonials' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#hero" className="tracking-tight">
          <img 
          src={dark ? logoDark : logoLight} 
          alt="logo antunes dev" 
          className="max-w-52 h-auto"
          />
        </a>

        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Toggle language"
          >
            <Globe size={16} />
            <span className="text-xs font-semibold uppercase">{lang === 'en' ? 'PT' : 'EN'}</span>
          </button>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#contact" className="btn-primary text-sm !px-4 !py-2">
            {t.nav.bookCall}
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
            aria-label="Toggle language"
          >
            <Globe size={16} />
            <span className="text-xs font-semibold uppercase">{lang === 'en' ? 'PT' : 'EN'}</span>
          </button>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground py-2 font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary text-center mt-2">
                {t.nav.bookCall}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
