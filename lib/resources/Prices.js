const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/prices',
 	/**  
    * List Prices
    * @param {object} query - Query parameters
    * @method GET /prices
    * Details for Walio Prices API 
		* @see https://docs.walio.io/reference/prices
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

	/**  
    * Retrieve a Price
		* @param {string} price - Price Object ID
    * @method GET /prices/{id}
    * Details for Walio Prices API 
		* @see https://docs.walio.io/reference/prices
  **/
  retrieve: async function(price, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${price}`;

    return requestPromise(method, url, null, null, options);

  },

	/**  
    * Subscription count of a Price
    * @param {string} price - Price Object ID
    * @method GET /prices/{id}/subscription_count
    * Details for Walio Prices API 
		* @see https://docs.walio.io/reference/prices
  **/
  subscriptionCount: async function(price, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${price}/subscription_count`;

    return requestPromise(method, url, null, null, options);

  },

	/**  
    * Create a Price
		* @param {object} body - Request body
    * @method POST /prices
    * Details for Walio Prices API 
		* @see https://docs.walio.io/reference/prices
  **/
  create: async function(body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

	/**  
    * Update a Price
		* @param {string} price - Price Object ID
		* @param {object} body - Request body
    * @method PATCH /prices/{id}
    * Details for Walio Prices API 
		* @see https://docs.walio.io/reference/prices
  **/
  update: async function(price, body = {}, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${price}`;

    return requestPromise(method, url, body, null, options);

  },

	/**  
    * Delete a Price
    * @param {string} price - Price Object ID
    * @method DELETE /prices/{id}
    * Details for Walio Prices API 
		* @see https://docs.walio.io/reference/prices
  **/
  del: async function(price, options = {}) {

    const method = 'DELETE';
    
    const url = `${this.path}/${price}`;

    return requestPromise(method, url, null, null, options);

  },
};
