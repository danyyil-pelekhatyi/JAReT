export {
	getData
}

function getData() {
	let url = "https://spreadsheets.google.com/feeds/list/1v462Jrwh7pUBVubz_8-lPdRtIjgPyFC9hg3W2hN4aIw/1/public/basic?alt=json-in-script&callback=JSON_CALLBACK";
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, false);
	xhr.send();
	console.log(xhr);
}