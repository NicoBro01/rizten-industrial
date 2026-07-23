import Seo from '../components/Seo';
import { COMPANY } from '../data/content';

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title={`Privacy Policy — ${COMPANY.name}`}
        description="Informativa sul trattamento dei dati personali raccolti tramite il sito e i moduli di contatto."
      />

      <section className="border-b border-steel-200 bg-navy-800">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="spec-tag text-navy-300">Informativa</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-bold uppercase text-white sm:text-6xl">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="space-y-10 text-sm leading-relaxed text-steel-700">
          <p className="text-xs text-steel-500">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase text-navy-800">
              1. Titolare del trattamento
            </h2>
            <p className="mt-3">
              Il Titolare del trattamento dei dati personali raccolti tramite questo sito è{' '}
              {COMPANY.name}, con sede in {COMPANY.address}, P.IVA {COMPANY.piva}{' '}
              <span className="text-steel-400">
                (dati placeholder — sostituire con i dati reali dell&apos;azienda)
              </span>
              . Per qualsiasi richiesta relativa al trattamento dei dati personali è possibile
              scrivere a{' '}
              <a href={`mailto:${COMPANY.email}`} className="link-underline text-navy-700">
                {COMPANY.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase text-navy-800">
              2. Quali dati raccogliamo
            </h2>
            <p className="mt-3">
              Questo sito non raccoglie dati personali durante la normale navigazione. Gli unici
              dati personali trattati sono quelli che l&apos;utente sceglie volontariamente di
              inserire nei moduli della pagina{' '}
              <span className="font-medium text-navy-800">Contatti</span>:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>nome e cognome (o ragione sociale e nominativo del referente, per le aziende);</li>
              <li>indirizzo email;</li>
              <li>numero di telefono;</li>
              <li>posizione di interesse o tipologia di richiesta;</li>
              <li>il testo del messaggio inviato;</li>
              <li>
                eventualmente, il curriculum vitae che l&apos;utente allega manualmente alla propria
                candidatura.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase text-navy-800">
              3. Come funziona l&apos;invio del modulo
            </h2>
            <p className="mt-3">
              I moduli di contatto <strong>non inviano i dati a un server</strong>: alla conferma,
              il modulo predispone un&apos;email con i dati inseriti e apre il programma di posta
              predefinito dell&apos;utente (client desktop o webmail), che è poi l&apos;utente stesso
              a inviare in autonomia all&apos;indirizzo {COMPANY.email}. Di conseguenza:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>
                i dati inseriti nel modulo non transitano né vengono salvati su alcun server, database
                o servizio di terze parti gestito da {COMPANY.name} o da fornitori esterni;
              </li>
              <li>
                il sito stesso non conserva alcuna copia dei dati inviati: l&apos;unica copia esistente
                è l&apos;email ricevuta nella casella di posta del Titolare, analogamente a
                un&apos;email inviata spontaneamente dall&apos;utente.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase text-navy-800">
              4. Finalità e base giuridica del trattamento
            </h2>
            <p className="mt-3">
              I dati inseriti nei moduli sono trattati al solo fine di rispondere alla richiesta
              dell&apos;utente (richiesta di preventivo, contatto commerciale, candidatura per una
              posizione aperta). La base giuridica del trattamento è il consenso dell&apos;interessato
              (art. 6, par. 1, lett. a del Regolamento UE 2016/679), espresso tramite la casella di
              consenso presente nel modulo prima dell&apos;invio.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase text-navy-800">
              5. Conservazione dei dati
            </h2>
            <p className="mt-3">
              Poiché l&apos;invio avviene via email, i dati vengono conservati nella casella di posta
              del Titolare per il tempo necessario a gestire la richiesta e, successivamente, secondo
              gli ordinari criteri di conservazione della corrispondenza aziendale. L&apos;interessato
              può in qualsiasi momento richiedere la cancellazione dell&apos;email contenente i propri
              dati contattando il Titolare ai recapiti indicati al punto 1.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase text-navy-800">
              6. Cookie e strumenti di terze parti
            </h2>
            <p className="mt-3">
              Questo sito non utilizza cookie di profilazione, cookie analitici o di tracciamento, né
              cookie di terze parti. Non sono presenti strumenti di statistica (es. Google Analytics),
              pixel pubblicitari o contenuti incorporati da piattaforme esterne (es. video, mappe,
              social media). I font utilizzati sono ospitati direttamente sul server del sito
              (self-hosted): il loro caricamento non comporta alcuna richiesta né trasferimento di
              dati a server esterni.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase text-navy-800">
              7. Diritti dell&apos;interessato
            </h2>
            <p className="mt-3">
              In qualità di interessato, hai il diritto di richiedere in qualsiasi momento, ai sensi
              degli artt. 15-22 del Regolamento UE 2016/679:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>l&apos;accesso ai tuoi dati personali;</li>
              <li>la rettifica o la cancellazione degli stessi;</li>
              <li>la limitazione del trattamento;</li>
              <li>l&apos;opposizione al trattamento;</li>
              <li>la portabilità dei dati, ove applicabile;</li>
              <li>
                la revoca del consenso in qualsiasi momento, senza pregiudicare la liceità del
                trattamento basata sul consenso prestato prima della revoca.
              </li>
            </ul>
            <p className="mt-3">
              Per esercitare questi diritti è sufficiente scrivere a{' '}
              <a href={`mailto:${COMPANY.email}`} className="link-underline text-navy-700">
                {COMPANY.email}
              </a>
              . Resta inoltre fermo il diritto di proporre reclamo al Garante per la Protezione dei
              Dati Personali (
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-navy-700"
              >
                www.garanteprivacy.it
              </a>
              ) qualora si ritenga che il trattamento sia avvenuto in violazione della normativa
              vigente.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase text-navy-800">
              8. Modifiche a questa informativa
            </h2>
            <p className="mt-3">
              Il Titolare può aggiornare questa informativa nel tempo. Eventuali modifiche saranno
              pubblicate in questa pagina con indicazione della data di ultimo aggiornamento.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
