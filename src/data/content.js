// ─────────────────────────────────────────────────────────────────────────
// CONTENUTI DEL SITO — tutti i dati "placeholder" sono raccolti qui
// per essere modificati facilmente in un unico punto.
// ─────────────────────────────────────────────────────────────────────────

export const COMPANY = {
  name: 'Rizten Industrial',
  tagline: 'Impianti e Manutenzione',
  // PLACEHOLDER: percorso del logo sul vostro server.
  // Il logo NON è importato come asset del bundle (niente import da src/assets):
  // è un semplice <img src="..."> che punta a un file ospitato sul server,
  // così potete sostituirlo in qualsiasi momento senza ricompilare il sito.
  // Di default punta a "/logo.png" (file in public/ → root del sito pubblicato).
  // Sostituire con l'URL assoluto del vostro dominio quando disponibile, es:
  // 'https://www.riztenindustrial.it/logo.png'
  logoUrl: '/logo.png',
  // PLACEHOLDER — dati di contatto
  email: 'info@riztenindustrial.it',
  phone: '+39 0000 000000',
  phoneDisplay: '+39 000 0000000',
  address: 'Via dell\u2019Industria, 00 — 00000 Città (XX)',
  piva: 'IT00000000000',
};

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Chi Siamo', to: '/chi-siamo' },
  { label: 'Servizi', to: '/servizi' },
  { label: 'Posizioni Aperte', to: '/posizioni-aperte' },
  { label: 'Contatti', to: '/contatti' },
];

// icon: chiave usata da ServiceCard per selezionare l'icona SVG inline
export const SERVICES = [
  {
    id: 'manutenzione-impianti',
    icon: 'gear',
    code: 'SRV-01',
    title: 'Manutenzione Impianti',
    description:
      'Manutenzione ordinaria e straordinaria di impianti industriali, con piani programmati per ridurre i fermi macchina. [Testo placeholder: personalizzare con i dettagli reali.]',
    featured: true,
  },
  {
    id: 'installazioni',
    icon: 'crane',
    code: 'SRV-02',
    title: 'Installazioni',
    description:
      'Progettazione e installazione di nuovi impianti e linee produttive, dal sopralluogo tecnico al collaudo finale. [Testo placeholder: personalizzare con i dettagli reali.]',
    featured: true,
  },
  {
    id: 'saldature',
    icon: 'weld',
    code: 'SRV-03',
    title: 'Saldature e Carpenteria',
    description:
      'Lavorazioni di saldatura e carpenteria metallica eseguite da personale qualificato, su disegno o su misura. [Testo placeholder: personalizzare con i dettagli reali.]',
    featured: true,
  },
  {
    id: 'interventi-chiamata',
    icon: 'phone',
    code: 'SRV-04',
    title: 'Interventi su Chiamata',
    description:
      'Assistenza rapida su chiamata per guasti e urgenze, con tecnici pronti a intervenire su tutto il territorio. [Testo placeholder: personalizzare con i dettagli reali.]',
    featured: true,
  },
  {
    id: 'manutenzione-preventiva',
    icon: 'shield',
    code: 'SRV-05',
    title: 'Manutenzione Preventiva',
    description:
      'Piani di controllo periodico pensati per prevenire i guasti prima che si verifichino, riducendo i costi nel tempo. [Testo placeholder.]',
    featured: false,
  },
  {
    id: 'consulenza-tecnica',
    icon: 'clipboard',
    code: 'SRV-06',
    title: 'Consulenza Tecnica',
    description:
      'Sopralluoghi, perizie e consulenza tecnica per la scelta della soluzione impiantistica più adatta alle vostre esigenze. [Testo placeholder.]',
    featured: false,
  },
];

export const VALUES = [
  {
    icon: 'target',
    title: 'Affidabilità',
    description: 'Manteniamo gli impegni presi: tempi certi e interventi puntuali. [Placeholder]',
  },
  {
    icon: 'shield',
    title: 'Sicurezza',
    description: 'Lavoriamo nel rispetto rigoroso delle normative di sicurezza sul lavoro. [Placeholder]',
  },
  {
    icon: 'gear',
    title: 'Competenza Tecnica',
    description: 'Tecnici qualificati e formati costantemente sulle nuove tecnologie. [Placeholder]',
  },
  {
    icon: 'handshake',
    title: 'Trasparenza',
    description: 'Preventivi chiari e comunicazione diretta in ogni fase del lavoro. [Placeholder]',
  },
];

export const STATS = [
  { value: '15+', label: 'Anni di esperienza' },
  { value: '400+', label: 'Interventi completati' },
  { value: '120+', label: 'Clienti attivi' },
  { value: '20', label: 'Tecnici qualificati' },
];

export const JOBS = [
  {
    id: 'tecnico-manutentore',
    title: 'Tecnico Manutentore Meccanico',
    location: 'Milano (MI)',
    type: 'Tempo Indeterminato · Full Time',
    description:
      'Cerchiamo un tecnico manutentore da inserire nel team per interventi di manutenzione ordinaria e straordinaria su impianti industriali. [Descrizione placeholder.]',
    requirements: [
      'Diploma tecnico o qualifica professionale in ambito meccanico/elettromeccanico',
      'Esperienza pregressa in manutenzione industriale (min. 2 anni)',
      'Patente B, disponibilità a trasferte sul territorio',
      'Capacità di lettura di schemi tecnici e disegni meccanici',
    ],
  },
  {
    id: 'saldatore-qualificato',
    title: 'Saldatore Qualificato',
    location: 'Bergamo (BG)',
    type: 'Tempo Determinato · Full Time',
    description:
      'Ricerchiamo un saldatore con esperienza per lavorazioni di carpenteria metallica e saldature su acciaio e altre leghe. [Descrizione placeholder.]',
    requirements: [
      'Patentino di saldatura in corso di validità (es. TIG/MIG-MAG)',
      'Esperienza pregressa in officina o cantiere',
      'Precisione, autonomia e attenzione alla sicurezza',
      'Disponibilità a lavoro su turni',
    ],
  },
  {
    id: 'addetto-interventi',
    title: 'Addetto Interventi su Chiamata',
    location: 'Brescia (BS)',
    type: 'Part Time · Su Chiamata',
    description:
      'Cerchiamo una figura flessibile per interventi rapidi su chiamata in caso di guasti o urgenze presso i clienti. [Descrizione placeholder.]',
    requirements: [
      'Esperienza pratica in ambito manutenzione o impiantistica',
      'Flessibilità oraria, anche in orari serali/weekend',
      'Buone capacità di problem solving sul campo',
      'Automunito/a',
    ],
  },
];

export const APPLICATION_TYPES = [
  'Preventivo per un intervento',
  'Contratto di manutenzione programmata',
  'Partnership / Fornitura',
  'Altro',
];
