// const SUPPORTED_PREFIX = ['', 'REACT_APP_', 'NEXT_PUBLIC_', 'VITE_'];

/**
 * Function to get SECURE_LOCAL_STORAGE_HASH_KEY
 * @returns
 */
const getHashKey = () => {
  let value: string | null | undefined = null;
  try {
    if (typeof process.env != 'undefined') {
      value =
        process.env.SECURE_LOCAL_STORAGE_HASH_KEY ||
        process.env.REACT_APP_SECURE_LOCAL_STORAGE_HASH_KEY ||
        process.env.NEXT_PUBLIC_SECURE_LOCAL_STORAGE_HASH_KEY ||
        process.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY;
    }
  } catch (ex) {
    return null;
  }
  return value;
};

/**
 * Function to get SECURE_LOCAL_STORAGE_PREFIX
 * @returns
 */
const getStoragePrefix = () => {
  let value: string | null | undefined = null;
  try {
    if (typeof process.env != 'undefined') {
      value =
        process.env.SECURE_LOCAL_STORAGE_PREFIX ||
        process.env.REACT_APP_SECURE_LOCAL_STORAGE_PREFIX ||
        process.env.NEXT_PUBLIC_SECURE_LOCAL_STORAGE_PREFIX ||
        process.env.VITE_SECURE_LOCAL_STORAGE_PREFIX;
    }
  } catch (ex) {
    return null;
  }
  return value;
};
/**
 * Function to get SECURE_LOCAL_STORAGE_DISABLED_KEYS
 * @returns
 */
const getDisabledKeys = () => {
  let value: string | null | undefined = null;
  try {
    if (typeof process.env != 'undefined') {
      value =
        process.env.SECURE_LOCAL_STORAGE_DISABLED_KEYS ||
        process.env.REACT_APP_SECURE_LOCAL_STORAGE_DISABLED_KEYS ||
        process.env.NEXT_PUBLIC_SECURE_LOCAL_STORAGE_DISABLED_KEYS ||
        process.env.VITE_SECURE_LOCAL_STORAGE_DISABLED_KEYS;
    }
  } catch (ex) {
    return null;
  }
  return value;
};

const envHelper = {
  getHashKey,
  getStoragePrefix,
  getDisabledKeys,
};

export default envHelper;
