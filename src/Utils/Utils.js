class Utils {
  static formatDatetimeByLocale = (datetime, locale = 'en-US') => {
    if (!datetime) return '';
    return new Date(datetime).toLocaleDateString(locale);
  };
  static isJson = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };
}

export default Utils;
