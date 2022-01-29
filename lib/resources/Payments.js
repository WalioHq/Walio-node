const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/payments',
  /**  
  * List Payments
  * @param {object} query - Query parameters
  * @method GET /payments
  * Details for Walio Payments API 
	* @see https://docs.walio.io/reference/payments
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve a Payment
    * @param {string} payment - Payment Object ID
    * @method GET /payments/{id}
    * Details for Walio Payments API 
		* @see https://docs.walio.io/reference/payments
  **/
  retrieve: async function(payment, options = {}) {
    
    const method = 'GET';
    
    const url = `${this.path}/${payment}`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Create a Payment
    * @param {object} body - Request body
    * @method POST /payments
    * Details for Walio Payments API 
		* @see https://docs.walio.io/reference/payments
  **/
  create: async function(body = {}, options = {}) {
    
    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Update a Payment
    * @param {string} payment - Payment Object ID
    * @param {object} body - Request bodys
    * @method PATCH /payments/{id}
    * Details for Walio Payments API 
		* @see https://docs.walio.io/reference/payments
  **/
  update: async function(payment, body = {}, options = {}) {
     
    const method = 'PATCH';
    
    const url = `${this.path}/${payment}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Capture a Payment
    * @param {string} payment - Payment Object ID
    * @method POST /payments/{id}/capture
    * Details for Walio Payments API 
		* @see https://docs.walio.io/reference/payments
  **/
  capture: async function(payment, options = {}) {
     
    const method = 'POST';
    
    const url = `${this.path}/${payment}/capture`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Refund a Payment
    * @param {string} payment - Payment Object ID
    * @param {object} body - Request body
    * @method POST /payments/{id}/refund
    * Details for Walio Payments API 
		* @see https://docs.walio.io/reference/payments
  **/
  refund: async function(payment, body = {}, options = {}) {
     
    const method = 'POST';
    
    const url = `${this.path}/${payment}/refund`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Estimate a Payment before creating it
    * @param {object} query - Query parameters
    * @method GET /payments/estimate
    * Details for Walio Payments API 
		* @see https://docs.walio.io/reference/payments
  **/
  estimate: async function(query = {}, options = {}) {
     
    const method = 'GET';
    
    const url = `${this.path}/estimate`;

    return requestPromise(method, url, null, query, options);

  },

	/**  
    * get the available Payment networks for a currency, invoice or order
    * @param {object} query - Query parameters
    * @method POST /payments/networks
    * Details for Walio Payments API 
		* @see https://docs.walio.io/reference/payments
  **/
	getNetworks: async function(query = {}, options = {}) {
     
    const method = 'GET';
    
    const url = `${this.path}/networks`;

    return requestPromise(method, url, null, query, options);

  },

};
