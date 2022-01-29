const { requestPromise } = require('../Utils/Requests');

module.exports = {
	path: '/credit_notes',
	/**  
	* List Credit Notes
	* @param {object} query - Query parameters
	* @method GET /credit_notes
	* Details for Walio Credit Note API 
	* @see https://docs.walio.io/reference/credit-notes
  **/
	list: async function(query = {}, options = {}) {

		const method = 'GET';
    
    const url = `${this.path}`;

    return requestPromise(method, url, null, query, options);

	},

	/**  
		* Retrieve a Credit Note
		* @param {string} creditNote - Credit Note Object ID
		* @method GET /credit_notes/{id}
		* Details for Walio Credit Note API 
		* @see https://docs.walio.io/reference/credit-notes
	**/
	retrieve: async function(creditNote, options = {}) {
		
		const method = 'GET';
    
    const url = `${this.path}/${creditNote}`;

    return requestPromise(method, url, null, query, options);

	},

	/**  
		* List a Credit Note's Line Items
		* @param {string} creditNote - Credit Note Object ID
		* @param {object} query - Query parameters
		* @method GET /credit_notes/{id}/line_items
		* Details for Walio Credit Note API 
		* @see https://docs.walio.io/reference/credit-notes
	**/
	listLineItems: async function(creditNote, query = {}, options = {}) {

		const method = 'GET';
    
    const url = `${this.path}/${creditNote}/line_items`;

    return requestPromise(method, url, null, query, options);

	},

	/**  
		* Create a Credit Note
		* @param {object} body - Request body
		* @method POST /credit_notes
		* Details for Walio Credit Note API 
		* @see https://docs.walio.io/reference/credit-notes
	**/
	create: async function(body = {}, options = {}) {
		
		const method = 'POST';
    
    const url = `${this.path}`;

    return requestPromise(method, url, body, null, options);

	},

	/**  
		* Update a Credit Note
		* @param {string} creditNote - Credit Note Object ID
		* @param {object} body - Request body
		* @method PATCH /credit_notes/{id}
		* Details for Walio Credit Note API 
		* @see https://docs.walio.io/reference/credit-notes
	**/
	update: async function(creditNote, body = {}, options = {}) {
				
		const method = 'PATCH';
    
    const url = `${this.path}/${creditNote}`;

    return requestPromise(method, url, body, null, options);

	},

	/**  
		* Void a Credit Note
		* @param {string} creditNote - Credit Note Object ID
		* @method POST /credit_notes/{id}/void
		* Details for Walio Credit Note API 
		* @see https://docs.walio.io/reference/credit-notes
	**/
	void: async function(creditNote, options = {}) {
					
		const method = 'POST';
    
    const url = `${this.path}/${creditNote}/void`;

    return requestPromise(method, url, null, null, options);

	},

	/**  
		* Preview a Credit Note
		* @param {object} query - Query parameters
		* @method GET /credit_notes/preview
		* Details for Walio Credit Note API 
		* @see https://docs.walio.io/reference/credit-notes
	**/
	preview: async function(query = {}, options = {}) {

		const method = 'GET';
    
    const url = `${this.path}/preview`;

    return requestPromise(method, url, null, query, options);

	},
};
