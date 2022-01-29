const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/balance_transactions',
  /**  
  * List balance transactions
  * @param {object} query - Query parameters
  * @method GET /balance_transactions
  * Details for Walio Balance Transactions API 
  * @see https://docs.walio.io/reference/balance-transactions
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);
  },

  /**  
    * Retrieve a balance transaction
    * @param {string} transaction - Balance Transaction Object ID
    * @method GET /transactions/{id}
    * Details for Walio Balance Transactions API 
    * @see https://docs.walio.io/reference/balance-transactions
  **/
  retrieve: async function(transaction, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${transaction}`;

    return requestPromise(method, url, null, null, options);

  }
};
