const { restClient } = require('@polygon.io/client-js');
const rest = restClient("API KEY", "https://api.polygon.io");

// https://polygon.io/docs/options/get_v3_trades__optionsticker
rest.options.trades("O:TSLA210903C00700000").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});