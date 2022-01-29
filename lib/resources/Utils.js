const crypto = require('crypto');
const { WalioError } = require('../Utils/Errors');

const convertableFiat = ['usd', 'gbp', 'eur', 'aud', 'bhd', 'bmd', 'nzd', 'cad', 'chf', 'kwd', 'sgd', 'vef'];
const formatValues = ['crypto', 'fiat'];

module.exports = {
  /**  
  * Format Cryptocurrency or Fiat values to their Walio formats
  * @param {string} format - One of either crypto or fiat
	* @param {number} value - The value to format
	* @param {number} currency - Required when format = 'fiat' - The value's currency to format
  * @example
  * walio.utils.format('crypto', 22.398470) 
	* @returns {number} 2239847000
  **/
  format: function(format, value, currency) {
		if (!format) throw new WalioError(`'format' is required`);
		if (typeof format !== 'string') throw new WalioError(`'format' must be of type string`);
		if (formatValues.indexOf(format) === -1) throw new WalioError(`unknown 'format' value provided`);

		if (!value) throw new WalioError(`'value' is required`);
		if (typeof value === 'string') throw new WalioError(`'value' must be of type number`);
		if (isNaN(value)) throw new WalioError(`'value' must be of type number`);

		if (format === 'fiat' && !currency) throw new WalioError(`'currency' is required for fiat formatting`);
		if (format === 'fiat' && typeof currency !== 'string') throw new WalioError(`'currency' must be of type string`);

		let amount = 0;

		if (format === 'crypto') {
			amount = Math.trunc(value * Math.pow(10, 8));
		} 
		
		if (format === 'fiat') {
			if (convertableFiat.indexOf(currency.toLowerCase()) >= 0) {
				amount = Math.trunc(value * 100);
			} else {
				amount = Math.trunc(value);
			}
		}
    
		return amount;
  },

  /**  
  * Unformats Cryptocurrency or Fiat values from their Walio format to original format
  * @param {string} format - One of either crypto or fiat
	* @param {number} value - The value to format
	* @param {number} currency - Required when format = 'fiat' - The value's currency to format
  * @example
  * walio.utils.unformat('fiat', 28075, 'usd') 
	* @returns {number} 280.75
  **/
  unformat: function(format, value, currency) {
		if (!format) throw new WalioError(`'format' is required`);
		if (typeof format !== 'string') throw new WalioError(`'format' must be of type string`);
		if (formatValues.indexOf(format) === -1) throw new WalioError(`unknown 'format' value provided`);

		if (!value) throw new WalioError(`'value' is required`);
		if (typeof value === 'string') throw new WalioError(`'value' must be of type number`);
		if (isNaN(value)) throw new WalioError(`'value' must be of type number`);

		if (format === 'fiat' && !currency) throw new WalioError(`'currency' is required for fiat formatting`);
		if (format === 'fiat' && typeof currency !== 'string') throw new WalioError(`'currency' must be of type string`);

		let amount = 0;

		if (format === 'crypto') {
			amount = Number((Math.trunc(value) / Math.pow(10, 8)).toFixed(8));
		} 
		
		if (format === 'fiat') {
			if (convertableFiat.indexOf(currency.toLowerCase()) >= 0) {
				amount = Number((Math.trunc(value) / 100).toFixed(2));
			} else {
				amount = Math.trunc(value);
			}
		}
    
		return amount;
  },

  /**  
  * Verifies a receiving Webhook signature
  * @param {string} webhookSecret - The Webhook endpoint secret received when you created the webhook.
	* @param {object} headers - The request headers received from the webhook API event (request.headers when using express.js)
	* @param {object} event - The Event object received from the webhook API event
  * @example
  * walio.utils.verifyWebhook('whs_fc53..d4a', request.headers, request.body) 
	* @returns {boolean} true
  **/
  verifyWebhook: function(webhookSecret, headers = {}, event = {}) {
		if (!webhookSecret) throw new WalioError(`'webhookSecret' is required to verify a webhook event`);
		if (typeof webhookSecret !== 'string') throw new WalioError(`'webhookSecret' must be of type string`);
		if (!headers) throw new WalioError(`The request 'headers' is required to verify a webhook event`);
		if (!event) throw new WalioError(`the 'event' object is required to verify a webhook event`);

		const webhookSignatureHeader = headers.walio_signature;
		if (!webhookSignatureHeader) throw new WalioError('No webhook signature header in the request headers');
		// split the signature up into its values;
		const signatureData = webhookSignatureHeader.split(',');
		const timeData = signatureData.find((el) => el.startsWith('t='));
		if (!timeData) throw new WalioError('No webhook signature time present');
		const valData = signatureData.find((el) => el.startsWith('v0='));
		if (!valData) throw new WalioError('No webhook signature value present');

		const time = Number((timeData.split('='))[1]);
		const value = (valData.split('='))[1];

		let verified = false;

    const signature = crypto.createHmac('sha256', webhookSecret)
			.update(`${time}_${JSON.stringify(event)}`)
			.digest('hex');
			
		if (signature === value) {
			verified = true;
		} 	

		return verified;
  },

};
