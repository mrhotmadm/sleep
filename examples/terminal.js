const sleep = require('../index.js');

!(async function main() {
    console.log('hi');
    await sleep(1500);
    console.log('omg i need to take a poop');
    await sleep(1000);
    console.log('brb in 5 seconds');

    await sleep(5000)
    .then(() => console.log('\nholy im finally done that took a long time'))
})();