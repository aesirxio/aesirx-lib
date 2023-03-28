/* eslint-disable turbo/no-undeclared-env-vars */
const s: any = window;
export const env = process.env.NODE_ENV === 'test' ? process.env : { ...process.env, ...s['env'] };
