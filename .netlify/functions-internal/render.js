const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-9091b49f.js","imports":["_app/immutable/start-9091b49f.js","_app/immutable/chunks/index-925c6915.js","_app/immutable/chunks/singletons-eca981c1.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api",
				pattern: /^\/api\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/index.js'))
			},
			{
				type: 'page',
				id: "blog",
				pattern: /^\/blog\/?$/,
				names: [],
				types: [],
				path: "/blog",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "client-portal",
				pattern: /^\/client-portal\/?$/,
				names: [],
				types: [],
				path: "/client-portal",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				path: "/contact",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "gallery",
				pattern: /^\/gallery\/?$/,
				names: [],
				types: [],
				path: "/gallery",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/gallery",
				pattern: /^\/api\/gallery\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/gallery.js'))
			},
			{
				type: 'endpoint',
				id: "api/contact",
				pattern: /^\/api\/contact\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/contact.js'))
			},
			{
				type: 'endpoint',
				id: "api/articles",
				pattern: /^\/api\/articles\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/articles.js'))
			},
			{
				type: 'page',
				id: "blog/article-[id]",
				pattern: /^\/blog\/article-([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,7],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
