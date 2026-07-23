# Rizten Industrial — Sito vetrina

Sito vetrina di 5 pagine per azienda di manutenzione meccanica.
React 19 + Vite + React Router + Tailwind CSS.

## Avvio del progetto

```bash
npm install
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`.

Per generare la build di produzione:

```bash
npm run build
npm run preview
```

## Struttura del progetto

```
src/
├── assets/         # (vuota) il logo è caricato via URL esterno, non come import
├── components/     # Header, Footer, ServiceCard, JobCard, PersonForm, CompanyForm, Icons, Seo
├── data/           # content.js — TUTTI i dati placeholder in un unico file
├── layouts/        # MainLayout (Header + Outlet + Footer)
├── pages/          # Home, ChiSiamo, Servizi, PosizioniAperte, Contatti
├── router/         # configurazione React Router
├── styles/         # index.css (Tailwind + stili globali/signature)
├── App.jsx
└── main.jsx
```

## Cosa modificare per personalizzare il sito

Praticamente tutti i contenuti "placeholder" si trovano in **`src/data/content.js`**:

- `COMPANY` — nome, tagline, **logo (URL)**, email, telefono, indirizzo, P.IVA
- `NAV_LINKS` — voci del menu
- `SERVICES` — card dei servizi (Home ne mostra 4, Servizi li mostra tutti)
- `VALUES` — i valori aziendali mostrati in Home e Chi Siamo
- `STATS` — i numeri mostrati in Home e Chi Siamo
- `JOBS` — le posizioni aperte
- `APPLICATION_TYPES` — le opzioni del form aziende

### Logo

Il logo **non** è importato come asset del bundle:
è un semplice `<img src={COMPANY.logoUrl} />` che punta a un URL esterno. Basta cambiare
`COMPANY.logoUrl` in `src/data/content.js` con l'indirizzo del file ospitato sul vostro
server — non serve ricompilare né ridistribuire il codice.

### Email dei form (mailto)

I due form della pagina Contatti (Cerchi lavoro / Sei un'azienda) non inviano dati a un
server: al submit, dopo la validazione, costruiscono un link `mailto:` con oggetto e
corpo pre-compilati (tramite `encodeURIComponent`) e aprono il client di posta
dell'utente. L'indirizzo di destinazione è `COMPANY.email`.

> Nota: `mailto:` non supporta l'allegato automatico di file. Il campo "Allega CV" cattura
> solo il **nome** del file, che viene inserito nel testo dell'email come promemoria:
> l'utente dovrà allegare manualmente il file prima di inviare.

## Tecnologie utilizzate

- React 19
- Vite
- React Router (v7)
- Tailwind CSS

Nessuna libreria aggiuntiva: le icone sono SVG inline (`src/components/Icons.jsx`) e le
animazioni sono realizzate con CSS/Tailwind.
