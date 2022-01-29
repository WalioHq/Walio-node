const axios = require('axios');

const makeRequest = (request, retryAttempt = 0, retryDelay = 0) => {
	return new Promise((resolve, reject) => {
		axios(request)
		.then((resp) => {
			// create last response field on data;
			const lastResponse = buildLastResponse(resp);
			resolve({...resp.data, lastResponse});
		})
		.catch((e) => {
			if (e.response && e.response.data && e.response.data.error) {
				// check if statusCode >= 500
				// check if we should retry;
				// make a retry based on currency attempts and maxRetries;
				// define delay time (see INITIAL_NETWORK_RETRY_DELAY_SEC in walio.js);
				const lastResponse = buildLastResponse(e.response);
				reject({...e.response.data, lastResponse});
			} else if (e.message.includes('timeout')) {
				// it is a timeout error
				reject({
					message: 'Walio: Request failed due to timeout being reached',
					code: 'timeout_reached',
					details: e
				});
			}
			else reject({
				message: `Walio: ${e.message ? e.message : 'Unknown request error'}`,
				code: 'unknown_error',
				details: e
			})
		});
	});
};

const buildLastResponse = (response) => {
	return {
		statusCode: response.status,
		requestId: response.headers['request-id'],
		headers: {...response.headers}
	}
}

module.exports = {
	makeRequest
}