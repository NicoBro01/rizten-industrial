import Seo from '../components/Seo';
import { COMPANY, VALUES, STATS } from '../data/content';
import { SERVICE_ICONS } from '../components/Icons';
import { withBase } from '../utils/url';

export default function ChiSiamo() {
  return (
    <>
      <Seo
        title={`Chi Siamo — ${COMPANY.name}`}
        description="Scopri la storia, la missione e i valori di Rizten Industrial: esperienza, affidabilità e competenza tecnica al servizio della manutenzione industriale."
      />

      {/* HEADER PAGINA */}
      <section className="relative flex min-h-[318px] items-center overflow-hidden border-b border-steel-200 bg-navy-800 sm:min-h-[398px]">
        <img
          src={withBase('/Pic9.jpg')}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/85 to-navy-900/55" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="spec-tag text-navy-300">Chi siamo</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-bold uppercase text-white sm:text-6xl">
            PERCHÉ SCEGLIERE RIZTEN INDUSTRIAL?
          </h1>
        </div>
      </section>

      {/* STORIA */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-steel-700">
              Siamo {COMPANY.name}, una realtà dinamica e specializzata nata per rispondere alle
              esigenze della fabbrica moderna. Uniamo competenze tecniche solide a un approccio proattivo
              per azzerare i fermi macchina e ottimizzare le performance dei tuoi impianti.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-steel-700">
              Giovani, specializzati, orientati al futuro. Rizten Industrial nasce dall'iniziativa di un team giovane
              e altamente qualificato nel settore della meccanica e dell'impiantistica industriale.
              Essere una realtà giovane per noi significa flessibilità operativa,
              rapidità di intervento e utilizzo di metodologie moderne.
              Non ci limitiamo a riparare il guasto quando si verifica:
              lavoriamo al fianco dei responsabili di produzione e dei direttori di stabilimento per
              implementare strategie di manutenzione preventiva e predittiva.
            </p>

            <div className="mt-10 border-l-2 border-navy-500 pl-6">
              <p className="spec-tag">Missione</p>
              <p className="mt-2 text-xl font-medium leading-relaxed text-navy-800">
                Garantire che i tuoi impianti si fermino solo quando lo decidi tu.
              </p>
            </div>
          </div>

          {/* NUMERI */}
          <div className="corner-frame border border-steel-200 p-8">
            <p className="spec-tag">{COMPANY.name} in numeri</p>
            <div className="mt-6 grid grid-cols-2 gap-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl font-bold text-navy-800">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-steel-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALORI */}
      <section className="border-t border-steel-200 bg-steel-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="spec-tag">I nostri valori</p>
          <h2 className="mt-2 font-display text-4xl font-bold text-navy-800 sm:text-5xl">
            Come lavoriamo
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => {
              const Icon = SERVICE_ICONS[value.icon];
              return (
                <div
                  key={value.title}
                  className={`corner-frame group border border-steel-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-card-hover animate-fade-up stagger-${
                    i + 1
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-navy-50 text-navy-800 transition-all duration-300 group-hover:scale-110 group-hover:bg-navy-800 group-hover:text-white">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-navy-800">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="spec-tag">Il team</p>
        <h2 className="mt-2 max-w-xl font-display text-4xl font-bold text-navy-800 sm:text-5xl">
          Tecnici qualificati, sul campo ogni giorno
        </h2>

        <div className="corner-frame group relative mt-10 overflow-hidden border border-steel-200">
          <img
            src={withBase('/Pic10.jpg')}
            alt="Il team Rizten Industrial al lavoro in uno stabilimento produttivo"
            loading="lazy"
            decoding="async"
            className="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-96"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/0 to-transparent" />
        </div>
      </section>
    </>
  );
}
