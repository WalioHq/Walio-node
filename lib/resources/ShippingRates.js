const { requestPromise } = require('../Utils/Requests');

module.exports = {
  path: '/shipping_rates',
  /**  
    * List Shipping Rates
    * @param {object} query - Query parameters
    * @method GET /shipping_rates
    * Details for Walio ShippingRate API 
		* @see https://docs.walio.io/reference/shipping-rates
  **/
  list: async function(query = {}, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

  },

	/**  
    * Retrieve a Shipping Rate
    * @param {string} shippingRate - Shipping Rate Object ID
    * @method GET /shipping_rates/{id}
    * Details for Walio ShippingRate API 
		* @see https://docs.walio.io/reference/shipping-rates
  **/
  retrieve: async function(shippingRate, options = {}) {

    const method = 'GET';
    
    const url = `${this.path}/${shippingRate}`;

    return requestPromise(method, url, null, null, options);

  },


	/**  
    * Create a Shipping Rate
    * @param {object} body - Request body
    * @method POST /shipping_rates
    * Details for Walio ShippingRate API 
		* @see https://docs.walio.io/reference/shipping-rates
  **/
  create: async function(body = {}, options = {}) {

    const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

  },

	/**  
    * Update a Shipping Rate
    * @param {string} shippingRate - Shipping Rate Object ID
		* @param {object} body - Request body
    * @method PATCH /shipping_rates/{id}
    * Details for Walio ShippingRate API 
		* @see https://docs.walio.io/reference/shipping-rates
  **/
  update: async function(shippingRate, body = {}, options = {}) {

    const method = 'PATCH';
    
    const url = `${this.path}/${shippingRate}`;

    return requestPromise(method, url, body, null, options);

  },

	/**  
    * Delete a Shipping Rate
    * @param {string} shippingRate - Shipping Rate Object ID
    * @method DELETE /shipping_rates/{id}
    * Details for Walio ShippingRate API 
		* @see https://docs.walio.io/reference/shipping-rates
  **/
  del: async function(shippingRate, options = {}) {

    const method = 'DELETE';
    
    const url = `${this.path}/${shippingRate}`;

    return requestPromise(method, url, null, null, options);

  },
};
