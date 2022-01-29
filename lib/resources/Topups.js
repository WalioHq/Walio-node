const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/topups',
  /**  
    * List topups
    * @param {object} query - Query parameters
    * @method GET /topups
    * Details for Walio Topups API 
		* @see https://docs.walio.io/reference/topups
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve a topup
    * @param {string} topup - Topup Object ID
    * @method GET /topups/{id}
    * Details for Walio Topups API 
		* @see https://docs.walio.io/reference/topups
  **/
  retrieve: async function(topup, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${topup}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Create a topup
    * @param {object} body - Request body
    * @method POST /topups
    * Details for Walio Topups API 
		* @see https://docs.walio.io/reference/topups
  **/
  create: async function(body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Update a topup
    * @param {string} topup - Topup Object ID
    * @param {object} body - Request body
    * @method PATCH /topups/{id}
    * Details for Walio Topups API 
		* @see https://docs.walio.io/reference/topups
  **/
  update: async function(topup, body = {}, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${topup}`;

    return requestPromise(method, url, body, null, options);

  },

	/**  
    * View Topup data
    * @param {object} query - Query parameters
    * @method GET /topup/data
    * Details for Walio Topups API 
		* @see https://docs.walio.io/reference/topups
  **/
	data: async function(query = {}, options = {}) {

		const method = 'GET';
		
		const url = `${this.path}/data`;

		return requestPromise(method, url, null, query, options);

	},
};
