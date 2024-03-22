import murmurhash3_32_gc from 'murmurhash-js/murmurhash3_gc';
import { FINGERPRINT_KEYS, getDisabledKeys } from './utils';

// ClientJS prototype which contains all methods.
const ClientJS = class {
  //
  // MAIN METHODS
  //

  // Get Fingerprint.  Return a 32-bit integer representing the browsers fingerprint.
  getFingerprint() {
    const bar = '|';

    const disabledKeys = getDisabledKeys();
    let key = '';
    if (!disabledKeys.includes(FINGERPRINT_KEYS.USERAGENT)) {
      key += navigator.userAgent + bar;
    }
    if (!disabledKeys.includes(FINGERPRINT_KEYS.HOSTNAME)) {
      key += window.location.hostname + bar;
    }
    if (!disabledKeys.includes(FINGERPRINT_KEYS.SCREEN_PRINT)) {
      key += this.getScreenPrint() + bar;
    }
    if (!disabledKeys.includes(FINGERPRINT_KEYS.PLUGINS)) {
      key += this.getPlugins() + bar;
    }
    if (!disabledKeys.includes(FINGERPRINT_KEYS.FONTS)) {
      key += this.getFonts() + bar;
    }
    if (!disabledKeys.includes(FINGERPRINT_KEYS.LOCAL_STORAGE)) {
      key += this.isLocalStorage() + bar;
    }
    if (!disabledKeys.includes(FINGERPRINT_KEYS.SESSION_STORAGE)) {
      key += this.isSessionStorage() + bar;
    }
    if (!disabledKeys.includes(FINGERPRINT_KEYS.TIMEZONE)) {
      key += this.getTimeZone() + bar;
    }
    if (!disabledKeys.includes(FINGERPRINT_KEYS.LANGUAGE)) {
      key += this.getLanguage() + bar;
    }
    if (!disabledKeys.includes(FINGERPRINT_KEYS.SYSTEM_LANGUAGE)) {
      key += this.getSystemLanguage() + bar;
    }
    if (!disabledKeys.includes(FINGERPRINT_KEYS.COOKIE)) {
      key += this.isCookie() + bar;
    }
    if (!disabledKeys.includes(FINGERPRINT_KEYS.CANVAS)) {
      key += this.getCanvasPrint();
    }
    if (key.endsWith(bar)) key = key.substring(0, key.length - 1);
    const seed = 256;

    return murmurhash3_32_gc(key, seed);
  }

  //
  // SCREEN METHODS
  //

  // Get Screen Print.  Return a string containing screen information.
  getScreenPrint() {
    // "Current Resolution: " + this.getCurrentResolution() +", Available Resolution: " + this.getAvailableResolution() +
    return (
      'Color Depth: ' +
      this.getColorDepth() +
      ', Device XDPI: ' +
      this.getDeviceXDPI() +
      ', Device YDPI: ' +
      this.getDeviceYDPI()
    );
  }

  // Get Color Depth.  Return a string containing the color depth.
  getColorDepth() {
    return window.screen.colorDepth;
  }

  // Get Current Resolution.  Return a string containing the current resolution.
  getCurrentResolution() {
    return window.screen.width + 'x' + window.screen.height;
  }

  // Get Available Resolution.  Return a string containing the available resolution.
  getAvailableResolution() {
    return window.screen.availWidth + 'x' + window.screen.availHeight;
  }

  // Get Device XPDI.  Return a string containing the device XPDI.
  getDeviceXDPI() {
    // return window.screen.deviceXDPI;
    return '';
  }

  // Get Device YDPI.  Return a string containing the device YDPI.
  getDeviceYDPI() {
    // return window.screen.deviceYDPI;
    return '';
  }

  //
  // PLUGIN METHODS
  //

  // Get Plugins.  Return a string containing a list of installed plugins.
  getPlugins() {
    let pluginsList = '';

    for (let i = 0; i < navigator.plugins.length; i++) {
      if (i === navigator.plugins.length - 1) {
        pluginsList += navigator.plugins[i].name;
      } else {
        pluginsList += navigator.plugins[i].name + ', ';
      }
    }
    return pluginsList;
  }

  //
  // FONT METHODS
  //

  // Get Fonts.  Return a string containing a list of installed fonts.
  getFonts() {
    const fontString = '';

    // TODO: Need to enable this code
    // for (let i = 0; i < fontArray.length; i++) {
    //   if (fontDetective.detect(fontArray[i])) {
    //     if (i == fontArray.length - 1) {
    //       fontString += fontArray[i];
    //     } else {
    //       fontString += fontArray[i] + ", ";
    //     }
    //   }
    // }

    return fontString;
  }

  //
  // STORAGE METHODS
  //

  // Is Local Storage.  Check if local storage is enabled.
  isLocalStorage() {
    try {
      return !!localStorage;
    } catch (e) {
      return true; // SecurityError when referencing it means it exists
    }
  }

  // Is Session Storage.  Check if session storage is enabled.
  isSessionStorage() {
    try {
      return !!sessionStorage;
    } catch (e) {
      return true; // SecurityError when referencing it means it exists
    }
  }

  // Is Cookie.  Check if cookies are enabled.
  isCookie() {
    return navigator.cookieEnabled;
  }

  //
  // TIME METHODS
  //

  // Get Time Zone.  Return a string containing the time zone.
  getTimeZone() {
    const rightNow = new Date();
    let myNumber: any, formattedNumber, result;
    myNumber = String(-(rightNow.getTimezoneOffset() / 60));
    if (myNumber < 0) {
      myNumber = myNumber * -1;
      formattedNumber = ('0' + myNumber).slice(-2);
      result = '-' + formattedNumber;
    } else {
      formattedNumber = ('0' + myNumber).slice(-2);
      result = '+' + formattedNumber;
    }
    return result;
  }

  //
  // LANGUAGE METHODS
  //

  // Get Language.  Return a string containing the user language.
  getLanguage() {
    return navigator.language;
  }

  // Get System Language.  Return a string containing the system language.
  getSystemLanguage() {
    return navigator.language || window.navigator.language;
  }

  // Get Canvas Print.  Return a string containing the canvas URI data.
  getCanvasPrint() {
    // create a canvas element
    const canvas = document.createElement('canvas');

    // define a context let that will be used for browsers with canvas support
    let ctx: any;

    // try/catch for older browsers that don't support the canvas element
    try {
      // attempt to give ctx a 2d canvas context value
      ctx = canvas.getContext('2d');
    } catch (e) {
      // return empty string if canvas element not supported
      return '';
    }

    // https://www.browserleaks.com/canvas#how-does-it-work
    // Text with lowercase/uppercase/punctuation symbols
    const txt = 'ClientJS,org <canvas> 1.0';
    ctx.textBaseline = 'top';
    // The most common type
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#f60';
    ctx.fillRect(125, 1, 62, 20);
    // Some tricks for color mixing to increase the difference in rendering
    ctx.fillStyle = '#069';
    ctx.fillText(txt, 2, 15);
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
    ctx.fillText(txt, 4, 17);
    return canvas.toDataURL();
  }
};

const clientJS = new ClientJS();

export default clientJS;
