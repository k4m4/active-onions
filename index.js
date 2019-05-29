'use strict';
const tr = require('tor-request');

const checkTor = () => {
	return new Promise((resolve, reject) => {
		tr.request(`https://locate.now.sh/ip/json`, (error, res, body) => {
			if (!error && res.statusCode == 200) resolve();
			else {
				if (error.message.includes(`Are you running \`tor\``)) {
					reject(new Error(`Please ensure that you are running \`tor\``));
				} else reject(new Error(error));
			}
		})
	})
};

const checkOnion = (onion) => {
	return new Promise(resolve => {
		return tr.request(onion, {json: true}, (error, res, body) => {
			if (!error && [200, 403].includes(res.statusCode)) resolve(true);
			else resolve(false);
		})
	})
};

const activeOnions = (onions) => {
	if (!Array.isArray(onions)) {
		return Promise.reject(new TypeError(`Expected an \`array\`, got \`${typeof onions}\``));
	}

	return new Promise((resolve, reject) => {
		const onionsWithStatus = onions.map(async onion => [onion, await checkOnion(onion)])
		Promise.all(onionsWithStatus).then(x => resolve(x.filter(y => y[1]).map(z => z.slice(0, -1)[0])))
	})
};

module.exports = urls => {
	return checkTor().then(() => {
		return activeOnions(urls).then(onions => {
			return onions
		}).catch(error => { return Promise.reject(error) });
	}).catch(error => { return Promise.reject(error) });
};