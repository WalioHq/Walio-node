const Walio = require('../../walio');
const { WalioError } = require('../Utils/Errors');
const { stringifyRequestData, removeNull, validateTimeout, validateWalioAccount, getAppDataString } = require('../utils');
const { makeRequest } = require('./MakeRequest');

const requestPromise = (method, path, data = {}, params = {}, options = {}) => {
	// build request data here;
	const request = buildRequest(method, path, data = {}, params = {}, options = {})
	return makeRequest(request);
};

const buildRequest = (method, path, data = {}, params = {}, options = {}) => {
	let request = {
		// The request method eg: GET, POST, PATCH, DELETE;
		method: method,
		// The base URL of the endpoint
		baseURL: Walio.baseURL,
		// The URL path eg: /customers
		url: path,
		// The request headers
		headers: buildHeaders(options),
		// Request timeout in milliseconds
		timeout: Walio.timeout,
	};

	// Request body data
	if (data) {
		if (typeof data === 'object' && !Array.isArray(data)) {
			request.data = data;
		} else {
			throw new WalioError('Request data must be an Object')
		}
	}

	let queryParams = {...params};
	if (options) {
		if (typeof options === 'object' && !Array.isArray(options)) {
			// check for expand params
			if (Array.isArray(options.expand)) {
				queryParams.expand = [...options.expand];
			}

			// check for include params
			if (Array.isArray(options.include)) {
				queryParams.include = [...options.include];
			}

			// check for timeout changes
			if (options.timeout) {
				request.timeout = validateTimeout(options.timeout, Walio.timeout);
			}
		} else {
			throw new WalioError('Request options must be an Object');
		}
	}
	// Query parameters
	if (queryParams) {
		if (typeof params === 'object' && !Array.isArray(data)) {
			request.params = queryParams;
			// Query parameters serializer to format the params
			request.paramsSerializer = stringifyRequestData(queryParams);
		} else {
			throw new WalioError('Request parameters must be an Object');
		}
	}

	return request;
};

const buildHeaders = (options) => {
	let headers = {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		'User-Agent': getAppDataString(),
		'Walio-Account': options.walioAccount ? validateWalioAccount(options.walioAccount) : Walio.walioAccount,
		'Walio-Api-Key': Walio.apiKey,
		'Walio-Version': Walio.apiVersion,
		'Walio-Livemode': Walio.livemode,
		'Walio-Timestamp': Math.floor(Date.now() / 1000),
		'X-Walio-Client-User-Agent': Walio.clientUserAgent,
	}

	return removeNull(headers);
};

// TODO complete reties:
// const shouldRetry = (response, maxRetries, currentRetries) => {
// 	if (currentRetries >= maxRetries) {
// 		return false;
// 	} 
	
// 	// Retry on conflict error.
// 	if (response.status === 409) {
// 		return true;
// 	}

// 	if (response.headers['walio-should-retry']) {
// 		if (response.headers['walio-should-retry'] === 'true') {
// 			return true;
// 		}

// 		if (response.headers['walio-should-retry'] === 'false') {
// 			return false;
// 		}
// 	}

// 	// Retry on conflict error.
// 	if (response.status >= 500) {
// 		return true;
// 	}
// };

module.exports = {
	requestPromise
};

