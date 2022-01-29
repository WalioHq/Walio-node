const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/blockchain_transactions',
 	/**  
  * List blockchainTransactions
  * @param {object} query - Query parameters
  * @method GET /blockchain_transactions
  * Details for Walio blockchainTransactions API 
	* @see https://docs.walio.io/reference/blockchain-transactions
  **/
  list: async function(query = {}, options = {}) {
    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);
  },

 	/**  
  * Retrieve a blockchainTransactions
  * @param {string} blockchainTransaction - Blockchain Transaction Object ID
  * @method GET /blockchain_transactions/{id}
  * Details for Walio blockchainTransactions API 
	* @see https://docs.walio.io/reference/blockchain-transactions
  **/
  retrieve: async function(blockchainTransaction, options = {}) {
    const method = 'GET';
    
    const url = `${this.path}/${blockchainTransaction}`;

    return requestPromise(method, url, null, query, options);

  }
};
