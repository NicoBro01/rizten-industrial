export const COMPANY = {
  name: 'Rizten Industrial',
  tagline: 'L\'efficienza industriale ha una nuova energia',
  logoUrl: '/logo.png',
  email: 'riztenindustrial@pec.it',
  phone: '+39 0000 000000',
  phoneDisplay: '+39 000 0000000',
  address: 'Via Pascoli, 29 — 03043 Cassino (FR)',
  piva: '03343750604',
};

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Chi Siamo', to: '/chi-siamo' },
  { label: 'Servizi', to: '/servizi' },
  { label: 'Posizioni Aperte', to: '/posizioni-aperte' },
  { label: 'Contatti', to: '/contatti' },
];

export const SERVICES = [
  {
    id: 'manutenzione-meccanica-industriale',
    icon: 'gear',
    code: 'SRV-01',
    title: 'Manutenzione Meccanica Industriale',
    description:
      'Interventi ordinari, straordinari e correttivi su organi di trasmissione, motori, riduttori e linee di produzione automatizzate. Revisioniamo e rigeneriamo i tuoi macchinari per prolungarne la vita utile.',
    featured: true,
  },
  {
    id: 'impiantistica-piping',
    icon: 'crane',
    code: 'SRV-02',
    title: 'Impiantistica e Piping',
    description:
      'Installazione, manutenzione e collaudo di impianti idraulici, pneumatici, oleodinamici e reti di distribuzione fluidi/gas per l\'industria.',
    featured: true,
  },
  {
    id: 'montaggi-traslohi-industriali',
    icon: 'weld',
    code: 'SRV-03',
    title: 'Montaggi e Traslochi Industriali',
    description:
      'Gestione chiavi in mano del montaggio di nuovi macchinari o dello spostamento e ricollocamento di intere linee produttive e reparti.',
    featured: true,
  },
  {
    id: 'revamping-aggiornamento-tecnologico',
    icon: 'phone',
    code: 'SRV-04',
    title: 'Revamping e Aggiornamento Tecnologico',
    description:
      'Interventi di ammodernamento su impianti datati per adeguarli ai moderni standard di produttività, efficienza energetica e sicurezza.',
    featured: true,
  }
];

export const VALUES = [
  {
    icon: 'target',
    title: 'Zero sorprese',
    description: 'Approccio proattivo e manutenzione programmata per intercettare le anomalie prima che si trasformino in fermi macchina costosi.',
  },
  {
    icon: 'gear',
    title: 'Massima flessibilità',
    description: 'Interveniamo negli orari migliori per il tuo flusso di lavoro (turni notturni, weekend, pause di produzione) per non impattare sul tuo business.',
  },
  {
    icon: 'shield',
    title: 'Sicurezza e Tracciabilità',
    description: 'Operiamo nel pieno rispetto delle normative HSE. Ogni intervento è documentato con report tecnici dettagliati rilasciati al cliente.',
  },
  {
    icon: 'handshake',
    title: 'Trasparenza',
    description: 'Preventivi chiari e comunicazione diretta in ogni fase del lavoro.',
  },
];

export const STATS = [
  { value: '1+', label: 'Anni di esperienza' },
  { value: '20+', label: 'Interventi completati' },
  { value: '10+', label: 'Clienti attivi' },
  { value: '5', label: 'Tecnici qualificati' },
];

export const JOBS = [
  {
    id: 'tecnico-manutentore',
    title: 'Tecnico Manutentore Meccanico',
    location: 'Milano (MI)',
    type: 'Tempo Indeterminato · Full Time',
    description:
      'Cerchiamo un tecnico manutentore da inserire nel team per interventi di manutenzione ordinaria e straordinaria su impianti industriali.',
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
      'Ricerchiamo un saldatore con esperienza per lavorazioni di carpenteria metallica e saldature su acciaio e altre leghe.',
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
      'Cerchiamo una figura flessibile per interventi rapidi su chiamata in caso di guasti o urgenze presso i clienti.',
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
