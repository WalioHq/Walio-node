const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/invoice_items',
  /**  
  * List Invoice Items
  * @param {object} query - Query parameters
  * @method GET /invoice_items
  * Details for Walio Invoice Items API 
	* @see https://docs.walio.io/reference/invoice-items
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve an Invoice Item
    * @param {string} invoiceItem - Invoice Item Object ID
    * @method GET /invoice_items/{id}
    * Details for Walio Invoice Items API 
		* @see https://docs.walio.io/reference/invoice-items
  **/
  retrieve: async function(invoiceItem, options = {}) {
    
    const method = 'GET';
    
    const url = `${this.path}/${invoiceItem}`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Create an Invoice Item
    * @param {object} body - Request bodys
    * @method POST /invoice_items
    * Details for Walio Invoice Items API 
		* @see https://docs.walio.io/reference/invoice-items
  **/
  create: async function(body = {}, options = {}) {
     
    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Update an Invoice Item
    * @param {string} invoiceItem - Invoice Item Object ID
    * @param {object} body - Request body
    * @method PATCH /invoice_items/{id}
    * Details for Walio Invoice Items API 
		* @see https://docs.walio.io/reference/invoice-items
  **/
  update: async function(invoiceItem, body = {}, options = {}) {
     
    const method = 'PATCH';
    
    const url = `${this.path}/${invoiceItem}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Delete an Invoice Item
    * @param {string} invoiceItem - Invoice Item Object ID
    * @method DELETE /invoice_items/{id}
    * Details for Walio Invoice Items API 
		* @see https://docs.walio.io/reference/invoice-items
  **/
  del: async function(invoiceItem, options = {}) {

    const method = 'DELETE';
    
    const url = `${this.path}/${invoiceItem}`;

    return requestPromise(method, url, null, null, options);
  }

};
