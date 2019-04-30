'use strict';

function isPromise(input) => {
	return (
		(
			typeof Promise !== 'undefined' &&
			input instanceof Promise
		) ||
		(
			input !== null &&
			typeof input === 'object' &&
			typeof input.then === 'function' &&
			typeof input.catch === 'function'
		)
	);
}

module.exports = isPromise;
// TODO: Remove this for the next major release
module.exports.default = isPromise;
