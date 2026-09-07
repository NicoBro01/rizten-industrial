import { Link } from 'react-router-dom';
import { COMPANY, NAV_LINKS } from '../data/content';
import { MailIcon, PhoneIcon, MapPinIcon } from './Icons';
import { withBase } from '../utils/url';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-steel-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Azienda */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-display text-xl font-bold uppercase tracking-wide text-navy-800">
                {COMPANY.name}
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-steel-600">
              {COMPANY.tagline}. Manutenzione meccanica, installazioni e interventi tecnici
              affidabili nel tempo.
            </p>
          </div>

          {/* Link rapidi */}
          <div>
            <p className="spec-tag">Link Rapidi</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="link-underline text-sm font-medium text-steel-600 transition-colors hover:text-navy-800"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <p className="spec-tag">Contatti</p>
            <ul className="mt-4 space-y-3 text-sm text-steel-600">
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-navy-500" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 shrink-0 text-navy-500" />
                <a href={`tel:${COMPANY.phone}`} className="transition-colors hover:text-navy-800">
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon className="h-4 w-4 shrink-0 text-navy-500" />
                <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-navy-800">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="spec-tag">Serve un intervento?</p>
            <p className="mt-4 text-sm text-steel-600">
              Raccontaci di cosa hai bisogno: ti rispondiamo il prima possibile.
            </p>
            <Link to="/contatti" className="btn-secondary mt-4 w-full">
              Contattaci
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-steel-200 pt-6 text-xs text-steel-500 sm:flex-row">
          <p>
            © {year} {COMPANY.name}. Tutti i diritti riservati.{' '}
            <Link to="/privacy-policy" className="link-underline hover:text-navy-800">
              Privacy Policy
            </Link>
          </p>
          <p className="font-mono">
            P.IVA {COMPANY.piva}{' '}
          </p>
        </div>
      </div>
    </footer>
  );
}
