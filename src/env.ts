/* eslint-disable turbo/no-undeclared-env-vars */
const s: any = process.env.NODE_ENV === 'test' ? [] : window;
export const env = { ...process.env, ...s['env'] };
