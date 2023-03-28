export const env: any = () => {
  if (process.env.NODE_ENV === 'test') {
    console.log('333');
    return process.env;
  } else {
    const s: any = window ? window : {};
    return { ...process.env, ...s['env'] };
  }
};
