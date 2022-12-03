// php -S localhost:8000

let xhr = new XMLHttpRequest();

// 如果瀏覽器不支持XHR
if (!xhr) {
	alert('oops! Your browser does not support AJAX');
}

// 定義將請求(req)發送到伺服器的函式
function execute() {
	if (xhr.readyState == 0 || xhr.readyState == 4) {
		let item = document.getElementById('foodItem').value;
		let method = 'GET';
		let url = `/foodCheck.php?item=${item}`;
		xhr.open(method, url, true);
		xhr.onreadystatechange = handleServerResponse;

		// 因為我們使用的是get請求，所以需要將參數設置為null
		xhr.send(null);
	}
}

function handleServerResponse() {
	if (xhr.readyState == 4 && xhr.status == 200) {
		let xmlResponse = xhr.responseXML;

		let xmlDocumentElement = xmlResponse.documentElement;

		let message = xmlDocumentElement.innerHTML;

		document.getElementById(
			'output'
		).innerHTML = `<span style="color:green"> ${message}</span>`;

		// 每1秒重複一次此函式調用
		setTimeout(() => {
			execute();
		}, 1000);
	}
}

// need to kick everything off
execute();
