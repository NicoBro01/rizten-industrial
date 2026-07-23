import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ServiceCard from '../components/ServiceCard';
import { COMPANY, SERVICES, VALUES, STATS } from '../data/content';
import { ArrowRightIcon } from '../components/Icons';

export default function Home() {
  const featured = SERVICES.filter((s) => s.featured);

  return (
    <>
      <Seo
        title={`${COMPANY.name} — ${COMPANY.tagline}`}
        description="Rizten Industrial: manutenzione impianti, installazioni, saldature e interventi su chiamata. Affidabilità e competenza tecnica per aziende ed enti."
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-steel-200">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.035]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
          <div className="max-w-3xl animate-fade-up">
            <div className="corner-frame inline-flex items-center gap-2.5 border border-steel-200 px-4 py-2">
              <img
                src={COMPANY.logoUrl}
                alt={`Logo ${COMPANY.name}`}
                width={24}
                height={24}
                loading="lazy"
                className="h-6 w-6 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="spec-tag">{COMPANY.name}</span>
            </div>

            <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-navy-800 sm:text-6xl lg:text-7xl">
              {COMPANY.tagline}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-steel-600 sm:text-lg">
              Interventi tecnici puntuali, manutenzione programmata e installazioni per impianti
              industriali. Un unico partner per la sicurezza e la continuità operativa della vostra
              azienda.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link to="/contatti" className="btn-primary">
                Richiedi un intervento
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link to="/servizi" className="btn-secondary">
                Scopri i servizi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIZI IN EVIDENZA */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="spec-tag">I nostri servizi</p>
            <h2 className="mt-2 font-display text-4xl font-bold text-navy-800 sm:text-5xl">
              Cosa facciamo
            </h2>
          </div>
          <Link to="/servizi" className="link-underline hidden text-sm font-semibold uppercase tracking-wide text-navy-700 sm:inline-flex">
            Vedi tutti i servizi →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service, i) => (
            <div key={service.id} className={`animate-fade-up stagger-${i + 1}`}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        <Link
          to="/servizi"
          className="link-underline mt-8 inline-flex text-sm font-semibold uppercase tracking-wide text-navy-700 sm:hidden"
        >
          Vedi tutti i servizi →
        </Link>
      </section>

      {/* PERCHÉ SCEGLIERCI */}
      <section className="border-y border-steel-200 bg-navy-800">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="spec-tag text-navy-300">Perché sceglierci</p>
          <h2 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">
            Un partner tecnico su cui contare
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => (
              <div key={value.title} className={`animate-fade-up stagger-${i + 1}`}>
                <div className="h-px w-10 bg-navy-500 transition-all duration-300 group-hover:w-16" />
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-navy-700 pt-10 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-navy-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8">
        <h2 className="font-display text-4xl font-bold text-navy-800 sm:text-5xl">
          Hai un impianto da manutenere?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-steel-600">
          Raccontaci la tua esigenza: ti rispondiamo con un preventivo chiaro e tempi certi.
        </p>
        <Link to="/contatti" className="btn-primary mt-8 inline-flex">
          Vai ai contatti
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
