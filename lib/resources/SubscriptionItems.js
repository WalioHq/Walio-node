const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/subscription_items',
  /**  
  * List Subscription Items
  * @param {object} query - Query parameters
  * @method GET /subscription_items
  * Details for Walio Subscription Items API 
	* @see https://docs.walio.io/reference/subscription-items
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve an Subscription Item
    * @param {string} subscriptionItem - Subscription Item Object ID
    * @method GET /subscription_items/{id}
    * Details for Walio Subscription Items API 
		* @see https://docs.walio.io/reference/subscription-items
  **/
  retrieve: async function(subscriptionItem, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${subscriptionItem}`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Create an Subscription Item
    * @param {object} body - Request body
    * @method POST /subscription_items
    * Details for Walio Subscription Items API 
		* @see https://docs.walio.io/reference/subscription-items
  **/
  create: async function(body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Update an Subscription Item
    * @param {string} subscriptionItem - Subscription Item Object ID
    * @param {object} body - Request body
    * @method PATCH /subscription_items/{id}
    * Details for Walio Subscription Items API 
		* @see https://docs.walio.io/reference/subscription-items
  **/
  update: async function(subscriptionItem, body = {}, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${subscriptionItem}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Delete an Subscription Item
    * @param {string} subscriptionItem - Subscription Item Object ID
    * @param {object} body - Request body
    * @method DELETE /subscription_items/{id}
    * Details for Walio Subscription Items API 
		* @see https://docs.walio.io/reference/subscription-items
  **/
  del: async function(subscriptionItem, body = {}, options = {}) {

    const method = 'DELETE';
    
    const url = `${this.path}/${subscriptionItem}`;

    return requestPromise(method, url, body, null, options);

  },

	/**  
  * List Usage Summaries for a Subscription Item
  * @param {string} subscriptionItem - Subscription Item Object ID
  * @method GET /subscription_items/{id}/usage_record_summaries
  * Details for Walio Usage Records API 
	* @see https://docs.walio.io/reference/usage-records
  **/
	 listUsageSummaries: async function(subscriptionItem, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${subscriptionItem}/usage_record_summaries`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Create a Usage Record for a Subscription Item
    * @param {string} subscriptionItem - Subscription Item Object ID
    * @param {object} body - Request body
    * @method POST /subscription_items/{id}/usage_records
    * Details for Walio Usage Records API 
		* @see https://docs.walio.io/reference/usage-records
  **/
  createUsageRecord: async function(subscriptionItem, body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}/${subscriptionItem}/usage_records`;

    return requestPromise(method, url, body, null, options);

  },
};
