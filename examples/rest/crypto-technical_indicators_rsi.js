const { restClient } = require('@polygon.io/client-js');
const rest = restClient("API KEY", "https://api.polygon.io");

// hhttps://polygon.io/docs/crypto/get_v1_indicators_rsi__cryptoticker
rest.crypto.rsi("X:BTCUSD").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
