import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ServiceCard from '../components/ServiceCard';
import { COMPANY, SERVICES } from '../data/content';
import { ArrowRightIcon } from '../components/Icons';

export default function Servizi() {
  return (
    <>
      <Seo
        title={`Servizi — ${COMPANY.name}`}
        description="Tutti i servizi di Rizten Industrial: manutenzione impianti, installazioni, saldature e carpenteria, interventi su chiamata, manutenzione preventiva e consulenza tecnica."
      />

      <section className="border-b border-steel-200 bg-navy-800">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="spec-tag text-navy-300">Servizi</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-bold uppercase text-white sm:text-6xl">
            Cosa possiamo fare per te
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-200">
            Un elenco di servizi facilmente modificabile: aggiorna testi, icone e voci in{' '}
            <code className="rounded bg-navy-700 px-1.5 py-0.5 font-mono text-sm">
              src/data/content.js
            </code>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <div key={service.id} className={`animate-fade-up stagger-${(i % 6) + 1}`}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-steel-200 pt-12 text-center">
          <h2 className="font-display text-3xl font-bold text-navy-800 sm:text-4xl">
            Non trovi il servizio che cerchi?
          </h2>
          <p className="max-w-lg text-sm text-steel-600">
            Contattaci comunque: valutiamo ogni richiesta anche se non rientra esattamente in
            queste categorie.
          </p>
          <Link to="/contatti" className="btn-primary mt-2">
            Richiedi informazioni
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
