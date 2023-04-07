import type { Options } from 'tsup';

const env = process.env.NODE_ENV;

export const tsup: Options = {
  clean: true,
  format: ['esm'],
  minify: env === 'production',
  watch: env === 'development',
  outDir: 'dist',
  entry: ['src/index.{ts,tsx}', 'src/**/*.{ts,tsx}', '!src/**/*.test.{ts,tsx}'],
  target: 'es2020',
  outExtension() {
    return {
      js: `.js`,
    };
  },
};
