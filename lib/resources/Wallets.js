const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/wallets',
  /**  
  * List Wallets
  * @param {string} query - Query parameters
  * @method GET /wallets
  * Details for Walio Wallets API 
	* @see https://docs.walio.io/reference/wallets
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve a Wallet
    * @param {string} wallet - Wallet Object ID
    * @method GET /wallets/{id}
    * Details for Walio Wallets API 
		* @see https://docs.walio.io/reference/wallets
  **/
  retrieve: async function(wallet, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${wallet}`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Create a Wallet
    * @param {string} body - Request body
    * @method POST /wallets
    * Details for Walio Wallets API 
		* @see https://docs.walio.io/reference/wallets
  **/
  create: async function(body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Update a Wallet
    * @param {string} wallet - Wallet Object ID
    * @param {string} body - Request body
    * @method PATCH /wallets/{id}
    * Details for Walio Wallets API 
		* @see https://docs.walio.io/reference/wallets
  **/
  update: async function(wallet, body = {}, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${wallet}`;

    return requestPromise(method, url, body, null, options);

  },

	/**  
  * List a Wallet's Balance Transactions
	* @param {string} wallet - Wallet Object ID
  * @param {string} query - Query parameters
  * @method GET /wallets/{id}/balance_transactions
  * Details for Walio Wallet Balance Transactions API 
	* @see https://docs.walio.io/reference/balance-transactions-1
  **/
  listBalanceTransactions: async function(wallet, query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${wallet}/balance_transactions`;

    return requestPromise(method, url, null, query, options);

  },

	/**  
  * List a Wallet's Transfers
	* @param {string} wallet - Wallet Object ID
  * @param {string} query - Query parameters
  * @method GET /wallets/{id}/transfers
  * Details for Walio Wallet Transfers API 
	* @see https://docs.walio.io/reference/transfers-1
  **/
  listTransfers: async function(wallet, query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${wallet}/transfers`;

    return requestPromise(method, url, null, query, options);

  },

	/**  
  * Create a Wallet Transfer
	* @param {string} wallet - Wallet Object ID
  * @param {string} body - Request body
  * @method POST /wallets/{id}/transfers
  * Details for Walio Wallet Transfers API 
	* @see https://docs.walio.io/reference/transfers-1
  **/
  createTransfer: async function(wallet, body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}/${wallet}/transfers`;

    return requestPromise(method, url, body, null, options);

  },

	/**  
  * List a Wallet's Payouts
	* @param {string} wallet - Wallet Object ID
  * @param {string} query - Query parameters
  * @method GET /wallets/{id}/payouts
  * Details for Walio Wallet Payouts API 
	* @see https://docs.walio.io/reference/payouts-1
  **/
  listPayouts: async function(wallet, query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${wallet}/payouts`;

    return requestPromise(method, url, null, query, options);

  },

	/**  
  * Create a Wallet Payout
	* @param {string} wallet - Wallet Object ID
  * @param {string} body - Request body
  * @method POST /wallets/{id}/payouts
  * Details for Walio Wallet Payouts API 
	* @see https://docs.walio.io/reference/payouts-1
  **/
  createPayout: async function(wallet, body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}/${wallet}/payouts`;

    return requestPromise(method, url, body, null, options);

  },

	/**  
  * List a Wallet's Topups
	* @param {string} wallet - Wallet Object ID
  * @param {string} query - Query parameters
  * @method GET /wallets/{id}/topups
  * Details for Walio Wallet Topups API 
	* @see https://docs.walio.io/reference/topups-1
  **/
  listTopups: async function(wallet, query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${wallet}/topups`;

    return requestPromise(method, url, null, query, options);

  },

	/**  
  * Create a Wallet Topup
	* @param {string} wallet - Wallet Object ID
  * @param {string} body - Request body
  * @method POST /wallets/{id}/topups
  * Details for Walio Wallet Topups API 
	* @see https://docs.walio.io/reference/topups-1
  **/
  createTopup: async function(wallet, body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}/${wallet}/topups`;

    return requestPromise(method, url, body, null, options);

  },

};
