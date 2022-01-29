const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/order_returns',
  /**  
  * List Order Returns
  * @param {object} query - Query parameters
  * @method GET /order_returns
  * Details for Walio Order Returns API 
	* @see https://docs.walio.io/reference/order-returns
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve an Order Return
    * @param {string} orderReturn - Order Return Object ID
    * @method GET /order_returns/{id}
    * Details for Walio Order Returns API 
		* @see https://docs.walio.io/reference/order-returns
  **/
  retrieve: async function(orderReturn, query = {}) {
    const method = 'GET';
    
    const url = `${this.path}/${orderReturn}`;

    return requestPromise(method, url, null, null, options);
  },

	// DEPRECIATED;
  /**  
    * Create an Order Return
    * @param {object} body - Request body
    * @param {object} query - Query parameters
    * @method POST /order_returns
    * Details for Walio Order Returns API 
		* @see https://docs.walio.io/reference/order-returns
  **/
  refund: async function(body = {}, query = {}) {
    let url = `${path}/${orderReturn}`;
    if (Object.keys(query).length > 0) url += `?${stringifyRequestData(query)}`;
    return new Promise((resolve, reject) => {
      axios.post(url, body)
        .then((resp) => {
          resolve(resp.data);
        })
        .catch((e) => {
          if (e.response && e.response.data && e.response.data.error) reject(e.response.data.error);
          else throw new WalioError(e.message);
        });
    });
  }
};
