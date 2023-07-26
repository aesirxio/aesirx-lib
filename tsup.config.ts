import type { Options } from 'tsup';

const env = process.env.NODE_ENV;

export const tsup: Options = {
  clean: true,
  format: ['esm'],
  outDir: 'dist',
  entry: ['src/index.ts', 'src/**/*.ts', '!src/**/*.test.{ts,tsx}'],
  target: 'es2020',
  platform: 'browser',
  outExtension() {
    return {
      js: `.js`,
    };
  },
  esbuildOptions(options) {
    options.drop = ['console'];
  },
};
