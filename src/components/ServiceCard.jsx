import { SERVICE_ICONS } from './Icons';

export default function ServiceCard({ service, className = '' }) {
  const Icon = SERVICE_ICONS[service.icon];

  return (
    <div
      className={`corner-frame group relative flex h-full flex-col border border-steel-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-card-hover sm:p-7 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-navy-50 text-navy-800 transition-all duration-300 group-hover:scale-110 group-hover:bg-navy-800 group-hover:text-white">
          {Icon && <Icon className="h-6 w-6" />}
        </div>
      </div>

      <h3 className="mt-5 font-display text-2xl font-semibold text-navy-800">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-600">{service.description}</p>

      <div className="mt-5 h-px w-10 origin-left scale-x-100 bg-steel-200 transition-all duration-300 group-hover:w-16 group-hover:bg-navy-500" />
    </div>
  );
}
