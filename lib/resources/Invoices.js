const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/invoices',
  /**  
  * List Invoices
  * @param {object} query - Query parameters
  * @method GET /invoices
  * Details for Walio Invoices API 
	* @see https://docs.walio.io/#invoices
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve an Invoice
    * @param {string} invoice - Invoice Object ID
    * @method GET /invoices/{id}
    * Details for Walio Invoices API 
		* @see https://docs.walio.io/#invoices
  **/
  retrieve: async function(invoice, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${invoice}`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Create an Invoice
    * @param {object} body - Request body
    * @method POST /invoices
    * Details for Walio Invoices API 
		* @see https://docs.walio.io/#invoices
  **/
  create: async function(body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Update an Invoice
    * @param {string} invoice - Invoice Object ID
    * @param {object} body - Request body
    * @method PATCH /invoices/{id}
    * Details for Walio Invoices API 
		* @see https://docs.walio.io/#invoices
  **/
  update: async function(invoice, body = {}, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${invoice}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Delete an Invoice
    * @param {string} invoice - Invoice Object ID
    * @method DELETE /invoices/{id}
    * Details for Walio Invoices API 
		* @see https://docs.walio.io/#invoices
  **/
  del: async function(invoice, options = {}) {

    const method = 'DELETE';
    
    const url = `${this.path}/${invoice}`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Issue an Invoice
    * @param {string} invoice - Invoice Object ID
    * @method POST /invoices/{id}/issue
    * Details for Walio Invoices API 
		* @see https://docs.walio.io/#invoices
  **/
  issue: async function(invoice, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}/${invoice}/issue`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Pay an Invoice
    * @param {string} invoice - Invoice Object ID
    * @param {object} body - Request body
    * @method POST /invoices/{id}/pay
    * Details for Walio Invoices API 
		* @see https://docs.walio.io/#invoices
  **/
  pay: async function(invoice, body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}/${invoice}/pay`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Send an Invoice
    * @param {string} invoice - Invoice Object ID
    * @param {object} body - Request body
    * @method POST /invoices/{id}/send
    * Details for Walio Invoices API 
		* @see https://docs.walio.io/#invoices
  **/
  send: async function(invoice, body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}/${invoice}/send`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Void an Invoice
    * @param {string} invoice - Invoice Object ID
    * @method POST /invoices/{id}/void
    * Details for Walio Invoices API 
		* @see https://docs.walio.io/#invoices
  **/
  void: async function(invoice, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}/${invoice}/void`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Mark an Invoice as uncollectable
    * @param {string} invoice - Invoice Object ID
    * @method POST /invoices/{id}/uncollectable
    * Details for Walio Invoices API 
		* @see https://docs.walio.io/#invoices
  **/
  uncollectable: async function(invoice, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}/${invoice}/uncollectable`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * List an Invoice's Line Items
    * @param {string} invoice - Invoice Object ID
    * @param {object} query - Query parameters
    * @method GET /invoices/{id}/line_items
    * Details for Walio Invoices API 
		* @see https://docs.walio.io/#invoices
  **/
  listLineItems: async function(invoice, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${invoice}/line_items`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Retrieve an upcoming Invoice
    * @param {object} query - Query parameters
    * @method GET /invoices/{id}/upcoming
    * Details for Walio Invoices API 
		* @see https://docs.walio.io/#invoices
  **/
  upcoming: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/upcoming`;

    return requestPromise(method, url, null, query, options);

  },
};
