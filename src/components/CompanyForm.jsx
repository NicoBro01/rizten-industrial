import { useState } from 'react';
import { Link } from 'react-router-dom';
import { APPLICATION_TYPES } from '../data/content';
import { CheckIcon, ArrowRightIcon } from './Icons';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s./-]{6,}$/;

const emptyForm = {
  ragioneSociale: '',
  referente: '',
  email: '',
  telefono: '',
  tipologia: '',
  messaggio: '',
  consenso: false,
};

export default function CompanyForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
    setSent(false);
  };

  const validate = () => {
    const next = {};
    if (!form.ragioneSociale.trim()) next.ragioneSociale = "Inserisci la ragione sociale.";
    if (!form.referente.trim()) next.referente = 'Inserisci il nome del referente.';
    if (!form.email.trim()) next.email = 'Inserisci un indirizzo email.';
    else if (!EMAIL_RE.test(form.email.trim())) next.email = 'Indirizzo email non valido.';
    if (!form.telefono.trim()) next.telefono = 'Inserisci un numero di telefono.';
    else if (!PHONE_RE.test(form.telefono.trim())) next.telefono = 'Numero di telefono non valido.';
    if (!form.tipologia.trim()) next.tipologia = 'Seleziona una tipologia di richiesta.';
    if (!form.messaggio.trim() || form.messaggio.trim().length < 10)
      next.messaggio = 'Scrivi un breve messaggio (almeno 10 caratteri).';
    if (!form.consenso)
      next.consenso = "Devi accettare l'informativa privacy per inviare la richiesta.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setSent(false);
      return;
    }

    const subject = `Richiesta azienda — ${form.tipologia}`;
    const bodyLines = [
      `Ragione sociale: ${form.ragioneSociale}`,
      `Referente: ${form.referente}`,
      `Email: ${form.email}`,
      `Telefono: ${form.telefono}`,
      `Tipologia richiesta: ${form.tipologia}`,
      '',
      'Messaggio:',
      form.messaggio,
    ];

    const mailtoUrl = `mailto:commerciale@rizten.it?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailtoUrl;
    setSent(true);
  };

  const inputClass = (field) =>
    `w-full rounded-sm border bg-white px-4 py-2.5 text-sm text-steel-800 outline-none transition-colors placeholder:text-steel-400 ${
      errors[field]
        ? 'border-red-400 focus:border-red-500'
        : 'border-steel-300 focus:border-navy-500'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-ragione" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-steel-600">
            Ragione sociale
          </label>
          <input
            id="c-ragione"
            name="ragioneSociale"
            type="text"
            value={form.ragioneSociale}
            onChange={handleChange}
            className={inputClass('ragioneSociale')}
            placeholder="Es. Rossi S.r.l."
            aria-invalid={Boolean(errors.ragioneSociale)}
          />
          {errors.ragioneSociale && <p className="mt-1.5 text-xs text-red-500">{errors.ragioneSociale}</p>}
        </div>
        <div>
          <label htmlFor="c-referente" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-steel-600">
            Referente
          </label>
          <input
            id="c-referente"
            name="referente"
            type="text"
            value={form.referente}
            onChange={handleChange}
            className={inputClass('referente')}
            placeholder="Nome e cognome"
            aria-invalid={Boolean(errors.referente)}
          />
          {errors.referente && <p className="mt-1.5 text-xs text-red-500">{errors.referente}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-steel-600">
            Email
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass('email')}
            placeholder="ufficio@azienda.it"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="c-telefono" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-steel-600">
            Telefono
          </label>
          <input
            id="c-telefono"
            name="telefono"
            type="tel"
            value={form.telefono}
            onChange={handleChange}
            className={inputClass('telefono')}
            placeholder="02 1234567"
            aria-invalid={Boolean(errors.telefono)}
          />
          {errors.telefono && <p className="mt-1.5 text-xs text-red-500">{errors.telefono}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="c-tipologia" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-steel-600">
          Tipologia richiesta
        </label>
        <select
          id="c-tipologia"
          name="tipologia"
          value={form.tipologia}
          onChange={handleChange}
          className={inputClass('tipologia')}
          aria-invalid={Boolean(errors.tipologia)}
        >
          <option value="">Seleziona una tipologia…</option>
          {APPLICATION_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.tipologia && <p className="mt-1.5 text-xs text-red-500">{errors.tipologia}</p>}
      </div>

      <div>
        <label htmlFor="c-messaggio" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-steel-600">
          Messaggio
        </label>
        <textarea
          id="c-messaggio"
          name="messaggio"
          rows={4}
          value={form.messaggio}
          onChange={handleChange}
          className={inputClass('messaggio')}
          placeholder="Descrivi brevemente la tua richiesta…"
          aria-invalid={Boolean(errors.messaggio)}
        />
        {errors.messaggio && <p className="mt-1.5 text-xs text-red-500">{errors.messaggio}</p>}
      </div>

      <div>
        <label className="flex items-start gap-2.5 text-xs leading-relaxed text-steel-600">
          <input
            type="checkbox"
            name="consenso"
            checked={form.consenso}
            onChange={handleChange}
            className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-steel-300 text-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy-500"
            aria-invalid={Boolean(errors.consenso)}
          />
          <span>
            Ho letto l&apos;<Link to="/privacy-policy" target="_blank" className="link-underline text-navy-700">informativa privacy</Link> e
            acconsento al trattamento dei dati inseriti per essere ricontattati in merito alla
            richiesta.
          </span>
        </label>
        {errors.consenso && <p className="mt-1.5 text-xs text-red-500">{errors.consenso}</p>}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Invia richiesta
        <ArrowRightIcon className="h-4 w-4" />
      </button>

      {sent && (
        <p className="flex items-center gap-2 text-sm font-medium text-navy-700">
          <CheckIcon className="h-4 w-4" />
          Si è aperto il tuo client di posta con i dati precompilati.
        </p>
      )}
    </form>
  );
}
