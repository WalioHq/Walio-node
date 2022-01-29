const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/balance',
  /**  
  * retrieve your balance
  * @method GET /balance
  * Details for Walio Balance API 
  * @see https://docs.walio.io/reference/balance
  **/
  retrieve: async function(options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, null, options);

  }
};

