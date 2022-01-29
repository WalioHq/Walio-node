const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/discounts',
 	/**  
  * List discounts
  * @param {object} query - Query parameters
  * @method GET /discounts
  * Details for Walio Discount API see
  * @see https://docs.walio.io/reference/discounts
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

 	/**  
    * Retrieve a discount
    * @param {string} discount - Discount Object ID
    * @method GET /discounts/{id}
    * Details for Walio Discount API
    * @see https://docs.walio.io/reference/discounts
  **/
  retrieve: async function(discount, options = {}) {
    
    const method = 'GET';
    
    const url = `${this.path}/${discount}`;

    return requestPromise(method, url, null, null, options);

  },

 	/**  
    * Create a discount
    * @param {string} body - Request body
    * @method POST /discounts
    * Details for Walio Discount API
    * @see https://docs.walio.io/reference/discounts
  **/
  create: async function(body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

 	/**  
    * Update a discount
    * @param {string} discount - Discount Object ID
		* @param {object} body - Request body
    * @method PATCH /discounts/{id}
    * Details for Walio Discount API
    * @see https://docs.walio.io/reference/discounts
  **/
  update: async function(discount, body = {}, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${discount}`;

    return requestPromise(method, url, body, null, options);

  },

 	/**  
    * Delete a discount
    * @param {string} discount - Discount Object ID
    * @method DELETE /discounts/{id}
    * Details for Walio Discount API
    * @see https://docs.walio.io/reference/discounts
  **/
  del: async function(discount, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${discount}`;

    return requestPromise(method, url, null, null, options);

  },
};
