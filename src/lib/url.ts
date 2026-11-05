// Prefixes internal links with the site's base path, so the site works both at a
// sub-path (GitHub Pages: /Coach_Rowling/) and at the root of a custom domain.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string) => `${base}${path}`;
export const stripBase = (path: string) => (base && path.startsWith(base) ? path.slice(base.length) || '/' : path);
