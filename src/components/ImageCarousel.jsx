import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRightIcon } from './Icons';
import { withBase } from '../utils/url';

const AUTOPLAY_MS = 5000;

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = images.length;

  const goTo = useCallback(
    (i) => setIndex(((i % count) + count) % count),
    [count]
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const timerRef = useRef(null);
  useEffect(() => {
    if (paused) return undefined;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    timerRef.current = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [next, paused]);

  return (
    <div
      className="corner-frame group relative overflow-hidden border border-steel-200 bg-navy-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carosello"
      aria-label="Galleria interventi sul campo"
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
      }}
    >
      <div className="relative h-[320px] w-full sm:h-[420px] lg:h-[520px]">
        {images.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            style={{ opacity: i === index ? 1 : 0, pointerEvents: i === index ? 'auto' : 'none' }}
            aria-hidden={i !== index}
          >
            <img
              src={withBase(img.src)}
              alt={img.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="h-full w-full object-cover"
              style={{
                transform: i === index ? 'scale(1.04)' : 'scale(1)',
                transition: i === index ? 'transform 6s ease-out' : 'none',
              }}
            />
          </div>
        ))}

        {/* Scrim per leggibilità didascalia */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/10 to-transparent" />

        {/* Didascalia */}
        <div className="absolute bottom-0 left-0 p-5 sm:p-7">
          <p className="spec-tag text-navy-300">
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </p>
          <p className="mt-1 font-display text-xl font-semibold text-white sm:text-2xl">
            {images[index].caption}
          </p>
        </div>

        {/* Frecce */}
        <button
          type="button"
          onClick={prev}
          aria-label="Immagine precedente"
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-sm border border-white/30 bg-navy-900/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-navy-900/70 focus-visible:opacity-100 group-hover:opacity-100 sm:h-10 sm:w-10"
        >
          <ArrowRightIcon className="h-4 w-4 rotate-180" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Immagine successiva"
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-sm border border-white/30 bg-navy-900/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-navy-900/70 focus-visible:opacity-100 group-hover:opacity-100 sm:h-10 sm:w-10"
        >
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>

      {/* Indicatori */}
      <div className="absolute right-5 top-5 flex gap-2 sm:right-7 sm:top-7">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Vai all'immagine ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
