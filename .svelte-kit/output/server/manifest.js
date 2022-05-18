export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	_: {
		mime: {".png":"image/png",".txt":"text/plain"},
		entry: {"file":"start-c7b8f8c9.js","js":["start-c7b8f8c9.js","chunks/index-898d2b75.js","chunks/index-02f2276a.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		]
	}
};