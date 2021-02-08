import { BASE_EXECUTION_PATH, BUSINESS_SEARCH_PATH } from '../constants/paths'
const querystring = require('querystring');

export async function getYelpBusinesses(location) {
	const requestOptions = {
		method: 'GET',
	};
	const response = await fetch(BASE_EXECUTION_PATH + BUSINESS_SEARCH_PATH + querystring.stringify({ location: location }), requestOptions)
	.then(r => r.json())
	.catch(err => {
		console.log(err)
		throw err;
	});
	return JSON.parse(response.body);
}