'use strict';

const { WalioError } = require('./lib/Utils/Errors');
const resources = require('./lib/Utils/resources');
const utils = require('./lib/utils');
const {determineProcessUserAgentProperties, validateInteger} = utils;

Walio.PACKAGE_VERSION = require('./package.json').version;
Walio.resources = resources;

const DEFAULT_API_VERSION = 'v1'
const DEFAULT_HOST = 'https://api.walio.io';
const DEFAULT_TESTMODE_HOST = 'https://sandbox.walio.io';
const DEFAULT_TIMEOUT = 80000;
const DEFAULT_MAX_RETRIES = 0;
const MAX_NETWORK_RETRY_DELAY_SEC = 2;
const INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;
const ALLOWED_APP_DATA_PROPERTIES = ['name', 'version', 'url'];
const ALLOWED_CONFIG_PROPERTIES = [
  'apiVersion',
  'maxNetworkRetries',
  'timeout',
  'host',
  'appData',
  'walioAccount',
];

const USER_AGENT = {
  bindings_version: Walio.PACKAGE_VERSION,
  lang: 'node',
  publisher: 'walio',
  ...determineProcessUserAgentProperties(),
};

function Walio(key, config = {}) {
  if (!(this instanceof Walio)) {
    return new Walio(key, config);
  }

  //if (!key) throw new WalioError('Please provide an apiKey');

  this.setLivemode(config);
  this.setApiVersion(config);
  this.setBaseURL(config);
  this.setApiKey(key);
  this.setMaxRetries(config);
  this.setTimeout(config); 
  this.setClientUserAgent(USER_AGENT);
  
  if (config.walioAccount) {
    this.setWalioAccount(config.walioAccount)
  }
  
  if (config.appData) {
    this.setAppData(config.appData);
  }
  
  // Resources
  this.balance = require('./lib/resources/Balance');
  this.balanceTransactions = require('./lib/resources/BalanceTransactions');
  this.blockchainTransactions = require('./lib/resources/BlockchainTransactions');
  this.creditNotes = require('./lib/resources/CreditNotes');
  this.customers = require('./lib/resources/Customers');
  this.discounts = require('./lib/resources/Discounts');
  this.events = require('./lib/resources/Events');
  this.invoices = require('./lib/resources/Invoices');
  this.invoiceItems = require('./lib/resources/InvoiceItems');
  this.orders = require('./lib/resources/Orders');
  this.orderItems = require('./lib/resources/OrderItems');
  this.orderReturns = require('./lib/resources/OrderReturns');
  this.payments = require('./lib/resources/Payments');
  this.payouts = require('./lib/resources/Payouts');
  this.prices = require('./lib/resources/Prices');
  this.products = require('./lib/resources/Products');
  this.refunds = require('./lib/resources/Refunds');
  this.requests = require('./lib/resources/Requests');
  this.shippingRates = require('./lib/resources/ShippingRates');
  this.skus = require('./lib/resources/Skus');
  this.subscriptionItems = require('./lib/resources/SubscriptionItems');
  this.subscriptions = require('./lib/resources/Subscriptions');
  this.taxRates = require('./lib/resources/TaxRates');
  this.topups = require('./lib/resources/Topups');
  this.transfers = require('./lib/resources/Transfers');
  this.wallets = require('./lib/resources/Wallets');
  this.webhooks = require('./lib/resources/Webhooks');
  this.utils = require('./lib/resources/Utils')
}

Walio.prototype = {
  setBaseURL: (config) => {
    let host = ''
    if (config.host) {
      if (typeof config.host !== 'string') {
        throw new WalioError('host must be a string');
      }
      
      host = config.host; 
    } 
    else {
      if (typeof config.livemode === 'boolean') {
        if (config.livemode) host = `${DEFAULT_HOST}/${this.apiVersion}`
        else host = `${DEFAULT_TESTMODE_HOST}/${this.apiVersion}`;
      } else {
        // Defaults to livemode host
        host = `${DEFAULT_HOST}/${this.apiVersion}`
      }
    }
    this.baseURL = host;
  },

  setApiVersion: (config) => {
    let apiVersion = DEFAULT_API_VERSION;
    if (config.apiVersion) {
      if (typeof config.apiVersion !== 'string') {
        throw new WalioError('apiVersion must be a string');
      } else {
        apiVersion = config.apiVersion;
      }
    } 
    
    this.apiVersion = apiVersion;
  },

  setApiKey: (key) => {
    this.apiKey = key ? key : null;
  },

  setLivemode: (config) => {
    let livemode = false;
    if (typeof config.livemode === 'boolean') {
      if (config.livemode) livemode = true;
    }

    this.livemode = livemode;
  },

  setWalioAccount: (walioAccount) => {
    if (typeof walioAccount !== 'string') {
      throw new WalioError('walioAccount must be a string');
    }
      
    this.walioAccount = walioAccount;
  },

  setMaxRetries: (config) => {
    if (config.maxRetries) {
      if (typeof config.maxRetries === 'number') {
        if (config.maxRetries > 35) {
          throw new WalioError('maxRetries must be less than or equal too 35');
        }
      }
    } 
    
    this.maxRetries = validateInteger('maxRetries', config.maxRetries, DEFAULT_MAX_RETRIES);;
  },

  setTimeout: (config) => {
    if (config.timeout) {
      if (typeof config.timeout === 'number') {
        if (config.timeout > 300000) {
          throw new WalioError('maxRetries must be less than or equal too 300000 milliseconds');
        }
      }
    } 
    
    this.timeout = validateInteger('timeout', config.timeout, DEFAULT_TIMEOUT);
  },

  setAppData: (appData) => {
    if (typeof appData === 'object' && !Array.isArray(appData)) {
      if (!appData.name) {
        throw new WalioError('appData.name is required');
      }
      // check the keys are allowed:
      Object.keys(appData).forEach((key) => {
        if (ALLOWED_APP_DATA_PROPERTIES.indexOf(key) < 0) {
          throw new WalioError(`appData field ${key} is not allowed`);
        }
      });

      this.appData = {...appData};
    } else {
      throw new WalioError('appData must be an Object');
    }
  },

  setClientUserAgent: (userAgent) => {
    if (typeof userAgent === 'object' && !Array.isArray(userAgent)) {
      this.clientUserAgent = utils.createHeaderData(userAgent);
    } 
  },

  getMaxNetworkRetryDelay: () => {
    return MAX_NETWORK_RETRY_DELAY_SEC;
  },

  getInitialNetworkRetryDelay: () => {
    return INITIAL_NETWORK_RETRY_DELAY_SEC;
  },
}

module.exports = Walio;

