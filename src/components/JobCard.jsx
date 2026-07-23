import { Link } from 'react-router-dom';
import { MapPinIcon, ClockIcon, CheckIcon, ArrowRightIcon } from './Icons';

export default function JobCard({ job }) {
  return (
    <div className="corner-frame group relative border border-steel-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-card-hover sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl font-semibold text-navy-800 sm:text-3xl">
            {job.title}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-steel-600">
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="h-4 w-4 text-navy-500" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="h-4 w-4 text-navy-500" />
              {job.type}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-steel-600">{job.description}</p>

      <div className="mt-5">
        <p className="spec-tag">Requisiti</p>
        <ul className="mt-2.5 space-y-2">
          {job.requirements.map((req) => (
            <li key={req} className="flex items-start gap-2 text-sm text-steel-700">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-navy-500" />
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        to="/contatti"
        state={{ tab: 'persona', jobTitle: job.title }}
        className="btn-primary mt-6 w-full sm:w-auto"
      >
        Candidati
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
