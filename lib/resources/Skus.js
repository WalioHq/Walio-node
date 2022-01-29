const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/skus',
  /**  
  * List skus
  * @param {object} query - Query parameters
  * @method GET /skus
  * Details for Walio Sku API 
	* @see https://docs.walio.io/reference/skus
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve a sku
    * @param {string} sku - Sku Object ID
    * @method GET /skus/{id}
    * Details for Walio Sku API 
		* @see https://docs.walio.io/reference/skus
  **/
  retrieve: async function(sku, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${sku}`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Create a sku
    * @param {object} body - The request body
    * @method POST /skus
    * Details for Walio Sku API 
		* @see https://docs.walio.io/reference/skus
  **/
  create: async function(body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Update a sku
    * @param {string} sku - Sku Object ID
    * @param {object} body - The request body
    * @method PATCH /skus/{id}
    * Details for Walio Sku API 
		* @see https://docs.walio.io/reference/skus
  **/
  update: async function(sku, body = {}, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${sku}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Delete a sku
    * @param {string} sku - Sku Object ID
    * @method DELETE /skus/{id}
    * Details for Walio Sku API 
		* @see https://docs.walio.io/reference/skus
  **/
  del: async function(sku, options = {}) {

    const method = 'DELETE';
    
    const url = `${this.path}/${sku}`;

    return requestPromise(method, url, null, null, options);

  },
};
