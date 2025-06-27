const params = new URLSearchParams(window.location.search);
const request = params.get("request");
console.log("query: ", request);
