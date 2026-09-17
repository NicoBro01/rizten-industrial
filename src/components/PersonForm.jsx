import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { JOBS } from '../data/content';
import { UploadIcon, CheckIcon, ArrowRightIcon } from './Icons';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s./-]{6,}$/;

const emptyForm = {
  nome: '',
  email: '',
  telefono: '',
  posizione: '',
  messaggio: '',
  consenso: false,
};

export default function PersonForm({ initialJobTitle = '' }) {
  const [form, setForm] = useState({ ...emptyForm, posizione: initialJobTitle });
  const [cvFileName, setCvFileName] = useState('');
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (initialJobTitle) {
      setForm((f) => ({ ...f, posizione: initialJobTitle }));
    }
  }, [initialJobTitle]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
    setSent(false);
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    setCvFileName(file ? file.name : '');
  };

  const validate = () => {
    const next = {};
    if (!form.nome.trim()) next.nome = 'Inserisci il tuo nome e cognome.';
    if (!form.email.trim()) next.email = "Inserisci un indirizzo email.";
    else if (!EMAIL_RE.test(form.email.trim())) next.email = 'Indirizzo email non valido.';
    if (!form.telefono.trim()) next.telefono = 'Inserisci un numero di telefono.';
    else if (!PHONE_RE.test(form.telefono.trim())) next.telefono = 'Numero di telefono non valido.';
    if (!form.posizione.trim()) next.posizione = 'Seleziona una posizione di interesse.';
    if (!form.messaggio.trim() || form.messaggio.trim().length < 10)
      next.messaggio = 'Scrivi un breve messaggio (almeno 10 caratteri).';
    if (!form.consenso)
      next.consenso = "Devi accettare l'informativa privacy per inviare la candidatura.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setSent(false);
      return;
    }

    const subject = `Candidatura — ${form.posizione}`;
    const bodyLines = [
      `Nome e cognome: ${form.nome}`,
      `Email: ${form.email}`,
      `Telefono: ${form.telefono}`,
      `Posizione di interesse: ${form.posizione}`,
      '',
      'Messaggio:',
      form.messaggio,
      '',
      cvFileName
        ? `CV allegato (ricordati di allegare il file manualmente): ${cvFileName}`
        : 'Nessun CV indicato: ricordati di allegare il file manualmente prima di inviare.',
    ];

    const mailtoUrl = `mailto:personale@rizten.it?subject=${encodeURIComponent(
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
      <div>
        <label htmlFor="p-nome" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-steel-600">
          Nome e cognome
        </label>
        <input
          id="p-nome"
          name="nome"
          type="text"
          value={form.nome}
          onChange={handleChange}
          className={inputClass('nome')}
          placeholder="Es. Mario Rossi"
          aria-invalid={Boolean(errors.nome)}
        />
        {errors.nome && <p className="mt-1.5 text-xs text-red-500">{errors.nome}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="p-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-steel-600">
            Email
          </label>
          <input
            id="p-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass('email')}
            placeholder="mario.rossi@email.it"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="p-telefono" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-steel-600">
            Telefono
          </label>
          <input
            id="p-telefono"
            name="telefono"
            type="tel"
            value={form.telefono}
            onChange={handleChange}
            className={inputClass('telefono')}
            placeholder="333 1234567"
            aria-invalid={Boolean(errors.telefono)}
          />
          {errors.telefono && <p className="mt-1.5 text-xs text-red-500">{errors.telefono}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="p-posizione" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-steel-600">
          Posizione di interesse
        </label>
        <select
          id="p-posizione"
          name="posizione"
          value={form.posizione}
          onChange={handleChange}
          className={inputClass('posizione')}
          aria-invalid={Boolean(errors.posizione)}
        >
          <option value="">Seleziona una posizione…</option>
          {JOBS.map((job) => (
            <option key={job.id} value={job.title}>
              {job.title}
            </option>
          ))}
          <option value="Candidatura spontanea">Candidatura spontanea</option>
        </select>
        {errors.posizione && <p className="mt-1.5 text-xs text-red-500">{errors.posizione}</p>}
      </div>

      <div>
        <label htmlFor="p-messaggio" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-steel-600">
          Messaggio
        </label>
        <textarea
          id="p-messaggio"
          name="messaggio"
          rows={4}
          value={form.messaggio}
          onChange={handleChange}
          className={inputClass('messaggio')}
          placeholder="Raccontaci brevemente la tua esperienza…"
          aria-invalid={Boolean(errors.messaggio)}
        />
        {errors.messaggio && <p className="mt-1.5 text-xs text-red-500">{errors.messaggio}</p>}
      </div>

      <div>
        <label htmlFor="p-cv" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-steel-600">
          Allega CV
        </label>
        <label
          htmlFor="p-cv"
          className="flex cursor-pointer items-center gap-3 rounded-sm border border-dashed border-steel-300 px-4 py-3 text-sm text-steel-600 transition-colors hover:border-navy-400 hover:text-navy-700"
        >
          <UploadIcon className="h-5 w-5 shrink-0 text-navy-500" />
          {cvFileName ? (
            <span className="truncate font-medium text-navy-800">{cvFileName}</span>
          ) : (
            <span>Seleziona un file (PDF, DOC…)</span>
          )}
        </label>
        <input id="p-cv" type="file" onChange={handleFile} className="sr-only" />
        <p className="mt-1.5 text-xs text-steel-500">
          Il nome del file verrà indicato nell&apos;email: dovrai allegare manualmente il CV
          prima dell&apos;invio, poiché il modulo apre il tuo client di posta.
        </p>
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
            acconsento al trattamento dei miei dati personali per essere ricontattato/a in merito
            alla mia candidatura.
          </span>
        </label>
        {errors.consenso && <p className="mt-1.5 text-xs text-red-500">{errors.consenso}</p>}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Invia candidatura
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
