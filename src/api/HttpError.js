export default class HttpError extends Error {
	constructor(firstAgr, secondArg, ...rest){
		super(...rest);
		this.status = firstAgr;
		this.message = secondArg;
	};
};