import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import { Send, MapPin, Clock } from 'lucide-react';
import type { ContactForm } from '../types';

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: '', email: '', phone: '', service: 'Aplicações Web', date: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', service: 'Aplicações Web', date: '', message: '' });
      } else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  const inputClass = 'mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all';

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="font-heading font-bold text-foreground">
          Agende sua Consulta Gratuita
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-5 gap-8">
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-4"
            aria-label="Formulário de contato"
          >
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-foreground">Nome Completo</span>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Seu nome" maxLength={100} />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-foreground">Email</span>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="seu@email.com" maxLength={255} />
              </label>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-foreground">Telefone</span>
                <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="(00) 00000-0000" maxLength={20} />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-foreground">Serviço</span>
                <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={inputClass}>
                  <option>Aplicações Web</option>
                  <option>UI e UX</option>
                  <option>APIs e Integrações</option>
                  <option>Performance</option>
                </select>
              </label>
            </motion.div>

            <motion.label variants={fadeUp} className="block">
              <span className="text-sm font-medium text-foreground">Data Preferida</span>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputClass} />
            </motion.label>

            <motion.label variants={fadeUp} className="block">
              <span className="text-sm font-medium text-foreground">Mensagem</span>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClass} rows={4} placeholder="Conte sobre seu projeto..." maxLength={1000} />
            </motion.label>

            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <button type="submit" className="btn-primary" disabled={status === 'loading'}>
                <Send size={16} /> {status === 'loading' ? 'Enviando...' : 'Enviar — É Grátis!'}
              </button>
              {status === 'success' && <span className="text-sm text-accent font-medium">Enviado com sucesso!</span>}
              {status === 'error' && <span className="text-sm text-destructive font-medium">Erro. Tente novamente.</span>}
            </motion.div>

            <motion.p variants={fadeUp} className="text-xs text-muted-foreground">
              Respeitamos sua privacidade. Sem spam, nunca.
            </motion.p>
          </motion.form>

          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:col-span-2 bg-card p-6 rounded-lg shadow-lift border border-border h-fit"
          >
            <h3 className="font-semibold text-foreground">Informações</h3>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>Porto Alegre, RS, Brasil</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium text-foreground">Horário</span>
                  <br />Seg-Sex 9h–18h
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
