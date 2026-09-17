import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Seo from '../components/Seo';
import PersonForm from '../components/PersonForm';
import CompanyForm from '../components/CompanyForm';
import { COMPANY } from '../data/content';
import { MailIcon, PhoneIcon, MapPinIcon, ClipboardIcon } from '../components/Icons';
import { withBase } from '../utils/url';

export default function Contatti() {
  const location = useLocation();
  const initialTab = location.state?.tab === 'azienda' ? 'azienda' : 'persona';
  const initialJobTitle = location.state?.jobTitle ?? '';
  const [tab, setTab] = useState(initialTab);

  return (
    <>
      <Seo
        title={`Contatti — ${COMPANY.name}`}
        description="Contatta Rizten Industrial per un preventivo, un contratto di manutenzione o per candidarti a una posizione aperta. Modulo semplice e risposta rapida."
      />

      <section className="relative flex min-h-[318px] items-center overflow-hidden border-b border-steel-200 bg-navy-800 sm:min-h-[398px]">
        <img
          src={withBase('/Pic4.jpg')}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/85 to-navy-900/55" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="spec-tag text-navy-300">Contatti</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-bold uppercase text-white sm:text-6xl">
            Non aspettare il prossimo guasto. Metti in sicurezza la tua produzione
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* INFO AZIENDA */}
          <div className="lg:col-span-1">
            <div className="corner-frame border border-steel-200 p-7">
              <p className="spec-tag">{COMPANY.name}</p>
              <ul className="mt-5 space-y-5 text-sm text-steel-700">
                <li className="flex items-start gap-3">
                  <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy-500" />
                  <span>{COMPANY.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy-500" />
                  <a href={`tel:${COMPANY.phone}`} className="link-underline">
                    {COMPANY.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy-500" />
                  <a href={`tel:${COMPANY.phone2}`} className="link-underline">
                    {COMPANY.phone2Display}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy-500" />
                  <a href={`mailto:${COMPANY.email}`} className="link-underline break-all">
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <ClipboardIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy-500" />
                  <span className="font-mono text-xs">
                    P.IVA {COMPANY.piva}
                    <br />
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* FORM CON TAB */}
          <div className="lg:col-span-2">
            <div role="tablist" aria-label="Tipo di richiesta" className="flex border-b border-steel-200">
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'persona'}
                onClick={() => setTab('persona')}
                className={`relative flex-1 py-3 text-center font-display text-xl font-semibold uppercase tracking-wide transition-colors sm:flex-none sm:px-8 ${
                  tab === 'persona' ? 'text-navy-800' : 'text-steel-400 hover:text-steel-600'
                }`}
              >
                Cerchi lavoro?
                {tab === 'persona' && (
                  <span className="absolute inset-x-0 -bottom-px h-0.5 animate-grow-line bg-navy-800" />
                )}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'azienda'}
                onClick={() => setTab('azienda')}
                className={`relative flex-1 py-3 text-center font-display text-xl font-semibold uppercase tracking-wide transition-colors sm:flex-none sm:px-8 ${
                  tab === 'azienda' ? 'text-navy-800' : 'text-steel-400 hover:text-steel-600'
                }`}
              >
                Sei un&apos;azienda?
                {tab === 'azienda' && (
                  <span className="absolute inset-x-0 -bottom-px h-0.5 animate-grow-line bg-navy-800" />
                )}
              </button>
            </div>

            <div className="mt-8 animate-fade-in" key={tab}>
              {tab === 'persona' ? (
                <PersonForm initialJobTitle={initialJobTitle} />
              ) : (
                <CompanyForm />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
