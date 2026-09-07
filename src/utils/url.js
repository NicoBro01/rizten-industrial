// Antepone il base path del deploy (es. "/rizten-industrial/" su GitHub Pages)
// ai riferimenti assoluti verso file statici in `public/`.
export function withBase(path) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
