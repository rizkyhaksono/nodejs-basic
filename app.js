// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

const { coffee } = require("./lib/coffee");

// Linux
// NODE_ENV=production node app.js

// Windows
// SET NODE_ENV=production && node app.js

console.log(coffee.name);