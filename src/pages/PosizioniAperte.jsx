import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import JobCard from '../components/JobCard';
import { COMPANY, JOBS } from '../data/content';
import { ArrowRightIcon } from '../components/Icons';

export default function PosizioniAperte() {
  return (
    <>
      <Seo
        title={`Posizioni Aperte — ${COMPANY.name}`}
        description="Le posizioni aperte in Rizten Industrial: candidati per ruoli di tecnico manutentore, saldatore e addetto interventi su chiamata."
      />

      <section className="border-b border-steel-200 bg-navy-800">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="spec-tag text-navy-300">Lavora con noi</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-bold uppercase text-white sm:text-6xl">
            Posizioni aperte
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-200">
            Cerchiamo persone motivate e affidabili da inserire nel nostro team tecnico. Trovi le
            offerte qui sotto: candidati direttamente dal modulo dedicato.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="space-y-6">
          {JOBS.map((job, i) => (
            <div key={job.id} className={`animate-fade-up stagger-${i + 1}`}>
              <JobCard job={job} />
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-steel-200 pt-12 text-center">
          <h2 className="font-display text-3xl font-bold text-navy-800 sm:text-4xl">
            Nessuna posizione in linea con il tuo profilo?
          </h2>
          <p className="max-w-lg text-sm text-steel-600">
            Inviaci comunque una candidatura spontanea: la terremo in considerazione per le
            prossime opportunità.
          </p>
          <Link to="/contatti" state={{ tab: 'persona' }} className="btn-primary mt-2">
            Candidatura spontanea
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
