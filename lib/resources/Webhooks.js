const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/webhooks',
  /**  
  * List Webhooks
  * @param {string} query - Query parameters
  * @method GET /webhooks
  * Details for Walio Webhooks API 
	* @see https://docs.walio.io/reference/webhooks
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve a Webhook
    * @param {string} webhook - Webhook Object ID
    * @method GET /webhooks/{id}
    * Details for Walio Webhooks API 
		* @see https://docs.walio.io/reference/webhooks
  **/
  retrieve: async function(webhook, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${webhook}`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Create a Webhook
    * @param {string} body - Request body
    * @method POST /webhooks
    * Details for Walio Webhooks API 
		* @see https://docs.walio.io/reference/webhooks
  **/
  create: async function(body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Update a Webhook
    * @param {string} webhook - Webhook Object ID
    * @param {string} body - Request body
    * @method PATCH /webhooks/{id}
    * Details for Walio Webhooks API 
		* @see https://docs.walio.io/reference/webhooks
  **/
  update: async function(webhook, body = {}, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${webhook}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Delete a Webhook
    * @param {string} webhook - Webhook Object ID
    * @method DELETE /webhooks/{id}
    * Details for Walio Webhooks API 
		* @see https://docs.walio.io/reference/webhooks
  **/
  del: async function(webhook, options = {}) {

    const method = 'DELETE';
    
    const url = `${this.path}/${webhook}`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Reveal the secret of a Webhook
    * @param {string} webhook - Webhook Object ID
    * @method POST /webhooks/{id}/reveal_secret
    * Details for Walio Webhooks API 
		* @see https://docs.walio.io/reference/webhooks
  **/
    revealSecret: async function(webhook, options = {}) {

      const method = 'POST';
      
      const url = `${this.path}/${webhook}/reveal_secret`;
  
      return requestPromise(method, url, null, null, options);
  
    },
};
