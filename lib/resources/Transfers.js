const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/transfers',
  /**  
    * List transfers
    * @param {object} query - Query parameters
    * @method GET /transfers
    * Details for Walio Transfers API 
		* @see https://docs.walio.io/reference/transfers
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve a transfer
    * @param {string} transfer - Transfer Object ID
    * @method GET /transfers/{id}
    * Details for Walio Transfers API 
		* @see https://docs.walio.io/reference/transfers
  **/
  retrieve: async function(transfer, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${transfer}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Create a transfer
    * @param {object} body - Request body
    * @method POST /transfers
    * Details for Walio Transfers API 
		* @see https://docs.walio.io/reference/transfers
  **/
  create: async function(body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Update a transfer
    * @param {string} transfer - Transfer Object ID
    * @param {object} body - Request body
    * @method PATCH /transfers/{id}
    * Details for Walio Transfers API 
		* @see https://docs.walio.io/reference/transfers
  **/
  update: async function(transfer, body = {}, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${transfer}`;

    return requestPromise(method, url, body, null, options);

  },
};
