let xhr = new XMLHttpRequest();

// if you are old (or you're watching in video in the far far future), then give alert if your browser does not support the XHR object
if (!xhr) {
	alert('oops! Your browser does not support AJAX');
}

// define a function that sends the request to the server
function execute() {
	// if XHR object is not busy communicating to server OR its ready to receive a response from the server
	if (xhr.readyState == 0 || xhr.readyState == 4) {
		let foodItem = document.getElementById('foodItem').value;
		// define the request
		let method = 'GET';
		let url = 'http://127.0.0.1:8001/' + foodItem;
		xhr.open(method, url, true);
		// when we get a response from a server, then do something to our website
		xhr.onreadystatechange = handleServerResponse;
		// because we are using a GET request, the paremeter needs to be set to null
		xhr.send(null);
	}
}

function handleServerResponse() {
	// check state of response
	if (xhr.readyState == 4 && xhr.status == 200) {
		document.getElementById(
			'output'
		).innerHTML = `<span style="color:blue"> ${xhr.responseText}</span>`;

		// repeat this function call every 1 second
		setTimeout(() => {
			execute();
		}, 1000);
	}
}

// need to kick everything off
execute();
