export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-79ddfa5e.js","imports":["_app/immutable/start-79ddfa5e.js","_app/immutable/chunks/index-925c6915.js","_app/immutable/chunks/singletons-eca981c1.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/2.js')
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
				load: () => import('../output/server/entries/endpoints/api/index.js')
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
				load: () => import('../output/server/entries/endpoints/api/gallery.js')
			},
			{
				type: 'endpoint',
				id: "api/contact",
				pattern: /^\/api\/contact\/?$/,
				names: [],
				types: [],
				load: () => import('../output/server/entries/endpoints/api/contact.js')
			},
			{
				type: 'endpoint',
				id: "api/articles",
				pattern: /^\/api\/articles\/?$/,
				names: [],
				types: [],
				load: () => import('../output/server/entries/endpoints/api/articles.js')
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
};
