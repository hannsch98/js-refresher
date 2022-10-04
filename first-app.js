const fetchData = () => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("done");
		}, 1500);
	});
	return promise;
};

setTimeout(function timer() {
	console.log("Timer is done");
	fetchData()
		.then((text) => {
			console.log(text);
			return fetchData();
		})
		.then((text2) => {
			console.log(text2);
		});
}, 2000);
//asynchronous code because it doesn't execute immediately

console.log("Sup");
console.log("Hei Hei!");
//synchronous code because it executes immediately (delay can come from hardware/network)
