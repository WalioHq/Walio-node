const { requestPromise } = require('../Utils/Requests');

//const path = '/customers'
module.exports = {
  path: '/customers',
  /**  
    * List Customers
    * @param {object} query - Query parameters
    * @method GET /customers
    * Details for Walio Customer API 
		* @see https://docs.walio.io/reference/customers
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve a Customer
    * @param {string} customer - Customer Object ID
    * @method GET /customers/{id}
    * Details for Walio Customer API 
		* @see https://docs.walio.io/reference/customers
  **/
  retrieve: async function(customer, options = {}) {
    
    const method = 'GET';

    const url = `${this.path}/${customer}`;

    return requestPromise(method, url, null, null, options);
    
  },

  /**  
    * Create a Customer
    * @param {object} body - Request body
    * @method POST /customers
    * Details for Walio Customer API 
		* @see https://docs.walio.io/reference/customers
  **/
  create: async function(body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Update a Customer
    * @param {string} customer - Customer Object ID
    * @param {object} body - Request body
    * @method PATCH /customers/{id}
    * Details for Walio Customer API 
		* @see https://docs.walio.io/reference/customers
  **/
  update: async function(customer, body = {}, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${customer}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Delete a Customer
    * @param {string} customer - Customer Object ID
    * @method DELETE /customers/{id}
    * Details for Walio Customer API 
		* @see https://docs.walio.io/reference/customers
  **/
  del: async function(customer, options = {}) {

    const method = 'DELETE';
    
    const url = `${this.path}/${customer}`;

    return requestPromise(method, url, null, null, options);
  },

  // Customer balance transactions

  /**  
  * List customer balance transactions
	* @param {string} customer - Customer Object ID
  * @param {object} query - Query parameters
  * @method GET /customer/{id}/balance_transactions
  * Details for Walio Customer Balance Transactions API 
	* @see https://docs.walio.io/reference/customer-balance-transactions
  **/
  listBalanceTransactions: async function(customer, query = {}, options) {
    
    const method = 'GET';

    const url = `${this.path}/${customer}/balance_transactions`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve a customer balance transaction
		* @param {string} customer - Customer Object ID
    * @param {string} transaction - Customer Balance Transaction Object ID
    * @method GET /customer/{id}/balance_transactions/{id}
    * Details for Walio Customer Balance Transactions API 
		* @see https://docs.walio.io/reference/customer-balance-transactions
  **/
  retrieveBalanceTransaction: async function(customer, transaction) {

    const method = 'GET';
    
    const url = `${this.path}/${customer}/balance_transactions/${transaction}`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Create a customer balance transaction
		* @param {string} customer - Customer Object ID
    * @param {object} body - Request body
    * @method POST /customer/{id}/balance_transactions
    * Details for Walio Customer Balance Transactions API 
		* @see https://docs.walio.io/reference/customer-balance-transactions
  **/
  createBalanceTransaction: async function(customer, body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}/${customer}/balance_transactions`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Update a customer balance transaction
		* @param {string} customer - Customer Object ID
    * @param {string} transaction - Customer Balance Transaction Object ID
    * @param {object} body - Request body
    * @method PATCH /customer/{id}/balance_transactions/{id}
    * Details for Walio Customer Balance Transactions API 
		* @see https://docs.walio.io/reference/customer-balance-transactions
  **/
  updateBalanceTransaction: async function(customer, transaction, body, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${customer}/balance_transactions/${transaction}`;

    return requestPromise(method, url, body, null, options);

  },
};
