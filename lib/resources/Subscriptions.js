const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/subscriptions',
  /**  
  * List Subscriptions
  * @param {string} query - Query parameters
  * @method GET /subscriptions
  * Details for Walio Subscriptions API 
	* @see https://docs.walio.io/reference/subscriptions
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve a Subscription
    * @param {string} subscription - Subscription Object ID
    * @method GET /subscriptions/{id}
    * Details for Walio Subscriptions API 
		* @see https://docs.walio.io/reference/subscriptions
  **/
  retrieve: async function(subscription, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${subscription}`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Create a Subscription
    * @param {string} body - Request body
    * @method POST /subscriptions
    * Details for Walio Subscriptions API 
		* @see https://docs.walio.io/reference/subscriptions
  **/
  create: async function(body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Update a Subscription
    * @param {string} subscription - Subscription Object ID
    * @param {string} body - Request bodys
    * @method PATCH /subscriptions/{id}
    * Details for Walio Subscriptions API 
		* @see https://docs.walio.io/reference/subscriptions
  **/
  update: async function(subscription, body = {}, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${subscription}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Cancel a Subscription
    * @param {string} subscription - Subscription Object ID
    * @param {object} body - Request body
    * @method DELETE /subscriptions/{id}
    * Details for Walio Subscriptions API 
		* @see https://docs.walio.io/reference/subscriptions
  **/
  cancel: async function(subscription, body = {}, options = {}) {

    const method = 'DELETE';
    
    const url = `${this.path}/${subscription}`;

    return requestPromise(method, url, body, null, options);

  },
};
