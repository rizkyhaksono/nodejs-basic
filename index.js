// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

console.log(Object.getOwnPropertyNames(global));
// console.log(server);

const memoryInformation = process.memoryUsage();
 
console.log(memoryInformation);

const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);