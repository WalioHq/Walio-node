// 'use strict';

const qs = require('qs');
const crypto = require('crypto');
const Walio = require('../walio');
const { WalioError } = require('./Utils/Errors');

const utils = (module.exports = {
  /**
   * Stringifies an Object, accommodating nested objects
   * (forming the conventional key 'parent[child]=value')
   */
  stringifyRequestData: (data) => {
    return (
      qs
        .stringify(data, {
          serializeDate: (d) => Math.floor(d.getTime() / 1000),
        })
        // Don't use strict form encoding by changing the square bracket control
        // characters back to their literals. This is fine by the server, and
        // makes these parameter strings easier to read.
        .replace(/%5B/g, '[')
        .replace(/%5D/g, ']')
    );
  },

  /**
   * Secure compare, from https://github.com/freewil/scmp
   */
  secureCompare: (a, b) => {
    a = Buffer.from(a);
    b = Buffer.from(b);

    // return early here if buffer lengths are not equal since timingSafeEqual
    // will throw if buffer lengths are not equal
    if (a.length !== b.length) {
      return false;
    }

    // use crypto.timingSafeEqual if available (since Node.js v6.6.0),
    // otherwise use our own scmp-internal function.
    if (crypto.timingSafeEqual) {
      return crypto.timingSafeEqual(a, b);
    }

    const len = a.length;
    let result = 0;

    for (let i = 0; i < len; ++i) {
      result |= a[i] ^ b[i];
    }
    return result === 0;
  },

  /**
   * Remove empty values from an object
   */
  removeNull: (obj) => {
    if (typeof obj !== 'object') {
      throw new WalioError('Argument must be an object');
    }

    return Object.keys(obj).reduce((result, key) => {
      if (obj[key] != null) {
        result[key] = obj[key];
      }
      return result;
    }, {});
  },

  isObject: (obj) => {
    const type = typeof obj;
    return (type === 'function' || type === 'object') && !!obj;
  },

  /**
   * https://stackoverflow.com/a/2117523
   */
  uuid4: () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  },

  validateTimeout: (timeoutValue, defaultTimeout) => {
    const timeout = validateInteger('timeout', timeoutValue, defaultTimeout);

    if (timeout > 300000 || timeout < 0) {
      throw new WalioError('Timeout must be between 0 and 300000 milliseconds');
    }
  
    return timeout;
  },

  validateWalioAccount: (walioAccount) => {
    if (typeof walioAccount !== 'string') {
      throw new WalioError('WalioAccount must be a String');
    }
    
    return walioAccount;
  },

  getAppDataString: () => {
    const appData = Walio.appData;
    if (!appData) {
      return ''
    }

    let appInfo = appData.name;

    if (appData.version) {
      appInfo += `/${appData.version}`;
    }

    if (appData.url) {
      appInfo += ` (${appData.url})`;
    }

    return `Walio/${Walio.apiVersion} NodeBindings/${Walio.PACKAGE_VERSION} ${appInfo}`.trim();

  },

  validateInteger: (name, n, defaultVal) => {
    if (!Number.isInteger(n)) {
      if (defaultVal !== undefined) {
        return defaultVal;
      } else {
        throw new WalioError(`${name} must be an integer`);
      }
    }

    return n;
  },

  determineProcessUserAgentProperties: () => {
    return typeof process === 'undefined'
      ? {}
      : {
          lang_version: process.version,
          platform: process.platform,
        };
  },

  createHeaderData: (data = {}) => {
    let headerString = ''
    Object.keys(data).forEach((key) => {
      if (data[key]) headerString += headerString.length > 1 ? `,${key}=${data[key]}` : `${key}=${data[key]}`
    });
    return headerString;
  },
});