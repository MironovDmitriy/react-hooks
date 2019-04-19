require("babel-polyfill");
import fetch from 'isomorphic-fetch';
import HttpError from './HttpError';

export default async endpoint => {
	let url = `${endpoint}`;
	let response = await fetch(url);

	if (!response.ok) {
		const error = response;
		const status = response.status;
		const message = 'Что то пошло не так';

		throw new HttpError(status, message);
	}

	let result = response.json();
	return result;
};