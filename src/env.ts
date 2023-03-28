/* eslint-disable turbo/no-undeclared-env-vars */
export const env =
  process.env.NODE_ENV === 'test' ? process.env : { ...process.env, ...window['env'] };
