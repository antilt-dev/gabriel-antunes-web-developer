import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <div className="font-heading font-bold text-lg">Gabriel Antunes</div>
          <div className="text-sm text-secondary-foreground/70 mt-1">Web Developer · Porto Alegre, RS</div>
          <div className="text-xs text-secondary-foreground/50 mt-3">
            © {new Date().getFullYear()} Gabriel Antunes. Todos os direitos reservados.
          </div>
        </div>

        <nav className="flex gap-5 text-sm text-secondary-foreground/80">
          <a href="#services" className="hover:text-secondary-foreground transition-colors">Serviços</a>
          <a href="#portfolio" className="hover:text-secondary-foreground transition-colors">Portfolio</a>
          <a href="#about" className="hover:text-secondary-foreground transition-colors">Sobre</a>
          <a href="#contact" className="hover:text-secondary-foreground transition-colors">Contato</a>
        </nav>

        <div className="flex gap-3">
          <a href="https://github.com/antilt-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-md bg-secondary-foreground/10 hover:bg-secondary-foreground/20 transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/gabriel-antunes-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-md bg-secondary-foreground/10 hover:bg-secondary-foreground/20 transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
