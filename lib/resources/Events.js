const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/events',
 	/**  
  * List events
  * @param {object} query - Query parameters
  * @method GET /events
  * Details for Walio Events API see
  * @see https://docs.walio.io/reference/events
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

 	/**  
  * Retrieve an event
	* @param {string} event - Event Object ID
  * @method GET /events/{id}
  * Details for Walio Events API see
  * @see https://docs.walio.io/reference/events
  **/
  retrieve: async function(event, options = {}) {
    
    const method = 'GET';
    
    const url = `${this.path}/${event}`;

    return requestPromise(method, url, null, null, options);

  }
};
