declare global {
  interface Window {
    process: any;
  }
}
if (typeof window !== 'undefined') {
  window.process = { env: '' };
}
const s: any = process.env.NODE_ENV === 'test' ? [] : typeof window !== 'undefined' && window;
export const env = { ...process.env, ...s['env'] };
