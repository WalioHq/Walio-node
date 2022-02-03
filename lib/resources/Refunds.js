const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/refunds',
  /**  
  * List Refunds
  * @param {object} query - Query parameters
  * @method GET /refunds
  * Details for Walio Refunds API 
	* @see https://docs.walio.io/reference/refunds
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve a Refund
    * @param {string} refund - Refund Object ID
    * @method GET /refunds/{id}
    * Details for Walio Refunds API 
		* @see https://docs.walio.io/reference/refunds
  **/
  retrieve: async function(refund, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${refund}`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Create a Refund
    * @param {object} body - Request body
    * @method POST /refunds
    * Details for Walio Refunds API 
		* @see https://docs.walio.io/reference/refunds
  **/
  create: async function(body = {}, options = {}) {
    
    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Update a Refund
    * @param {string} refund - Refund Object ID
    * @param {object} body - Request body
    * @method PATCH /refunds/{id}
    * Details for Walio Refunds API 
		* @see https://docs.walio.io/reference/refunds
  **/
  update: async function(refund, body = {}, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${refund}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * View Refund data
    * @param {object} query - Query parameters
    * @method GET /refunds/data
    * Details for Walio Refunds API 
		* @see https://docs.walio.io/reference/refunds
  **/
	data: async function(query = {}, options = {}) {

		const method = 'GET';
		
		const url = `${this.path}/data`;

		return requestPromise(method, url, null, query, options);

	},
};
