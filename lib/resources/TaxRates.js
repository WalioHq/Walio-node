const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/tax_rates',
  /**  
    * List Tax Rates
    * @param {object} query - Query parameters
    * @method GET /tax_rates
    * Details for Walio Tax Rates API 
		* @see https://docs.walio.io/reference/tax-rates
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

  /**  
    * Retrieve a Tax Rate
    * @param {string} taxRate - Tax Rate Object ID
    * @method GET /tax_rates/{id}
    * Details for Walio Tax Rates API 
		* @see https://docs.walio.io/reference/tax-rates
  **/
  retrieve: async function(taxRate, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${taxRate}`;

    return requestPromise(method, url, null, null, options);

  },

  /**  
    * Create a Tax Rate
    * @param {object} body - Request body
    * @method POST /tax_rates
    * Details for Walio Tax Rates API 
		* @see https://docs.walio.io/reference/tax-rates
  **/
  create: async function(body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Update a Tax Rate
    * @param {string} taxRate - Tax Rate Object ID
    * @param {object} body - Request body
    * @method PATCH /tax_rates/{id}
    * Details for Walio Tax Rates API 
		* @see https://docs.walio.io/reference/tax-rates
  **/
  update: async function(taxRate, body = {}, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${taxRate}`;

    return requestPromise(method, url, body, null, options);

  },

  /**  
    * Delete a Tax Rate
    * @param {string} taxRate - Tax Rate Object ID
    * @method DELETE /tax_rates/{id}
    * Details for Walio Tax Rates API 
		* @see https://docs.walio.io/reference/tax-rates
  **/
  del: async function(taxRate, options = {}) {

    const method = 'DELETE';
    
    const url = `${this.path}/${taxRate}`;

    return requestPromise(method, url, null, null, options);

  },
};
