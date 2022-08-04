export async function getPayload(url) {
	const parseJSON = (resp) => (resp.json ? resp.json() : resp);
	const checkStatus = (resp) => {
		if (resp.status >= 200 && resp.status < 300) {
			return resp;
		}
		return parseJSON(resp).then((resp) => {
			throw resp;
		});
	};
	try {
		const res = await fetch(`${url}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(checkStatus)
			.then(parseJSON);
		console.log(res.data);
		return res.data;
	} catch (e) {
		console.error(e);
	}
}

export const getArticleSlug = (fn) => {
	return fn
		.split('-')
		.map((w) => w.toLowerCase())
		.join('-');
};


function capitalizeWord(word) {
	return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export const getArticleFilename = (slug) => {
	return slug
		.split('-')
		.map(w => capitalizeWord(w))
		.join('-');
}
