const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/requests',
  /**  
    * List requests
    * @param {object} query - Query parameters
    * @method GET /requests
    * Details for Walio Requests API 
		* @see https://docs.walio.io/reference/request-logs
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve a request
    * @param {string} request - Request Object ID
    * @method GET /requests/{id}
    * Details for Walio Requests API 
		* @see https://docs.walio.io/reference/request-logs
  **/
  retrieve: async function(request, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${request}`;

    return requestPromise(method, url, null, query, options);

  },

};
