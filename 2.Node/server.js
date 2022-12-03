// terminal : node server.js
let http = require('http');
let itemArray = ['burger', 'pizza', 'milk', 'coke'];

// The http.createServer() method turns your computer into an HTTP server
http.createServer((request, response) => {
	response.writeHead(200, {
		'Content-Type': 'text/plain',
		'Access-Control-Allow-Origin': '*',
	});

	let path = request.url;
	if (path !== '/') {
		let item = path.slice(1);
		if (itemArray.indexOf(item) !== -1) {
			response.end(`Nice. We do have ${item} in stock`);
		} else {
			response.end(`Sorry we do no thave ${item} in stock`);
		}
	} else {
		response.end('Please type something');
	}
}).listen(8001);
