// We aim to have the same support as Next.js
// https://nextjs.org/docs/getting-started#system-requirements
// https://nextjs.org/docs/basic-features/supported-browsers-features

module.exports = (api) => {
  const isTest = api.env('test');
  if (isTest) {
    return {
      presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
    };
  }
  return {
    presets: [['@babel/preset-env', { targets: { node: 14 } }]],
    plugins: ['@babel/plugin-proposal-optional-catch-binding', '@babel/plugin-transform-runtime'],
    ignore: ['../src/**/__tests__/**'],
    comments: false,
  };
};
