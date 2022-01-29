const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/order_items',
  /**  
  * List Order Items
  * @param {object} query - Query parameters
  * @method GET /order_items
  * Details for Walio Order Items API 
	* @see https://docs.walio.io/reference/order-items
  **/
  list: async function(query = {}, options = {}) {
    
    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve an Order Item
    * @param {string} orderItem - Order Item Object IDs
    * @method GET /order_items/{id}
    * Details for Walio Order Items API 
		* @see https://docs.walio.io/reference/order-items
  **/
  retrieve: async function(orderItem, options = {}) {
    
    const method = 'GET';
    
    const url = `${this.path}/${orderItem}`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Create an Order Item
    * @param {object} body - Request body
    * @method POST /order_items
    * Details for Walio Order Items API 
		* @see https://docs.walio.io/reference/order-items
  **/
    create: async function(body = {}, options = {}) {
     
      const method = 'POST';
      
      const url = `${this.path}`;
  
      return requestPromise(method, url, body, null, options);
  
    },

  /**  
    * Update an Order Item
    * @param {string} orderItem - Order Item Object ID
    * @param {object} body - Request body
    * @method PATCH /order_items/{id}
    * Details for Walio Order Items API 
		* @see https://docs.walio.io/reference/order-items
  **/
  update: async function(orderItem, body = {}, options = {}) {
    
    const method = 'PATCH';
    
    const url = `${this.path}/${orderItem}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Delete an Order Item
    * @param {string} orderItem - Order Item Object ID
    * @method DELETE /order_items/{id}
    * Details for Walio Order Items API 
		* @see https://docs.walio.io/reference/order-items
  **/
  del: async function(orderItem, options = {}) {
    
    const method = 'DELETE';
    
    const url = `${this.path}/${orderItem}`;

    return requestPromise(method, url, body, null, options);

  },

};
