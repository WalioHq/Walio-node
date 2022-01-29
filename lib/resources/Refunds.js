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
};
