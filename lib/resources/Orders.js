const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/orders',
  /**  
  * List Orders
  * @param {object} query - Query parameters
  * @method GET /orders
  * Details for Walio Orders API 
	* @see https://docs.walio.io/reference/orders
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve an Order
    * @param {string} order - Order Object ID
    * @method GET /orders/{id}
    * Details for Walio Orders API 
		* @see https://docs.walio.io/reference/orders
  **/
  retrieve: async function(order, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${order}`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Create an Order
    * @param {object} body - Request body
    * @method POST /orders
    * Details for Walio Orders API 
		* @see https://docs.walio.io/reference/orders
  **/
  create: async function(body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Update an Order
    * @param {string} order - Order Object ID
    * @param {object} body - Request body
    * @method PATCH /orders/{id}
    * Details for Walio Orders API 
		* @see https://docs.walio.io/reference/orders
  **/
  update: async function(order, body = {}, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${order}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Delete an Order
    * @param {string} order - Order Object ID
    * @method DELETE /orders/{id}
    * Details for Walio Orders API 
		* @see https://docs.walio.io/reference/orders
  **/
  del: async function(order, options = {}) {

    const method = 'DELETE';
    
    const url = `${this.path}/${order}`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Return an Order
    * @param {string} order - Order Object ID
    * @param {object} body - Request body
    * @method POST /orders/{id}/return
    * Details for Walio Orders API 
		* @see https://docs.walio.io/reference/orders
  **/
  return: async function(order, body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}/${order}/return`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Pay an Order
    * @param {string} order - Order Object ID
    * @param {object} body - Request body
    * @method POST /orders/{id}/pay
    * Details for Walio Orders API 
		* @see https://docs.walio.io/reference/orders
  **/
  pay: async function(order, body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}/${order}/pay`;

    return requestPromise(method, url, body, null, options);

  },
}