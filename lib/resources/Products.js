const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/products',
	/**  
    * List Products
    * @param {object} query - Query parameters
    * @method GET /products
    * Details for Walio Products API 
		* @see https://docs.walio.io/reference/products
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

 	/**  
    * Retrieve a Product
		* @param {string} product - Product Object ID
    * @method GET /products/{id}
    * Details for Walio Products API 
		* @see https://docs.walio.io/reference/products
  **/
  retrieve: async function(product, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${product}`;

    return requestPromise(method, url, null, null, options);

  },
	
 	/**  
    * Create a Product
		* @param {object} body - Request body
    * @method POST /products
    * Details for Walio Products API 
		* @see https://docs.walio.io/reference/products
  **/
  create: async function(body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

	/**  
    * Update a Product
		* @param {string} product - Product Object ID
		* @param {object} body - Request body
    * @method PATCH /products/{id}
    * Details for Walio Products API 
		* @see https://docs.walio.io/reference/products
  **/
  update: async function(product, body = {}, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${product}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Delete a Product
		* @param {string} product - Product Object ID
    * @method DELETE /products/{id}
    * Details for Walio Products API 
		* @see https://docs.walio.io/reference/products
  **/
  del: async function(product, options = {}) {

    const method = 'DELETE';
    
    const url = `${this.path}/${product}`;

    return requestPromise(method, url, null, null, options);

  },
};
