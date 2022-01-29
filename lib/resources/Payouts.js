const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/payouts',
  /**  
    * List payouts
    * @param {object} query - Query parameters
    * @method GET /payouts
    * Details for Walio Payouts API 
		* @see https://docs.walio.io/reference/payouts
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve a payout
    * @param {string} payout - Payout Object ID
    * @method GET /payouts/{id}
    * Details for Walio Payouts API 
		* @see https://docs.walio.io/reference/payouts
  **/
  retrieve: async function(payout, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${payout}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Create a payout
    * @param {object} body - Request body
    * @method POST /payouts
    * Details for Walio Payouts API 
		* @see https://docs.walio.io/reference/payouts
  **/
  create: async function(body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Update a payout
    * @param {string} payout - Payout Object ID
    * @param {object} body - Request body
    * @method PATCH /payouts/{id}
    * Details for Walio Payouts API 
		* @see https://docs.walio.io/reference/payouts
  **/
  update: async function(payout, body = {}, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${payout}`;

    return requestPromise(method, url, body, null, options);

  },

	/**  
    * View Payout data
    * @param {object} query - Query parameters
    * @method GET /payouts/data
    * Details for Walio Payouts API 
		* @see https://docs.walio.io/reference/payouts
  **/
	data: async function(query = {}, options = {}) {

		const method = 'GET';
		
		const url = `${this.path}/data`;

		return requestPromise(method, url, null, query, options);

	},
};
