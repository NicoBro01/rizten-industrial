import { SERVICE_ICONS } from './Icons';
import { withBase } from '../utils/url';

export default function ServiceCard({ service, className = '' }) {
  const Icon = SERVICE_ICONS[service.icon];

  return (
    <div
      className={`corner-frame group relative flex h-full flex-col border border-steel-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-card-hover ${className}`}
    >
      {service.image && (
        <div className="relative h-64 w-full overflow-hidden sm:h-72">
          <img
            src={withBase(service.image)}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
              service.imagePosition === 'top' ? 'object-top' : 'object-center'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/55 via-navy-900/0 to-transparent" />
        </div>
      )}

      <div className="relative flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <div
            className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-sm bg-navy-50 text-navy-800 transition-all duration-300 group-hover:scale-110 group-hover:bg-navy-800 group-hover:text-white ${
              service.image ? '-mt-12 border-4 border-white shadow-card' : ''
            }`}
          >
            {Icon && <Icon className="h-6 w-6" />}
          </div>
        </div>

        <h3 className="mt-5 font-display text-2xl font-semibold text-navy-800">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-600">{service.description}</p>

        <div className="mt-5 h-px w-10 origin-left scale-x-100 bg-steel-200 transition-all duration-300 group-hover:w-16 group-hover:bg-navy-500" />
      </div>
    </div>
  );
}
