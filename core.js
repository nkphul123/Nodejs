//Path
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
console.log(import.meta.url);
console.log(fileURLToPath(import.meta.url));
console.log("File Name:", path.basename(__filename));
console.log("Directory Name:",  path.dirname(__filename));
console.log("Extension:", path.extname(__filename))
console.log("Path Object:", path.parse(__filename));

//OS
// Import os core module
import os from 'os';
// Basic OS information
console.log("Operating System:", os.platform());
console.log("OS Type:", os.type());
console.log("OS Release:", os.release());
// CPU information
console.log("CPU Architecture:", os.arch());
console.log("Number of CPUs:", os.cpus().length);
// Memory information
console.log("Total Memory (GB):", (os.totalmem() / 1024 / 1024 / 1024).toFixed(2));
console.log("Free Memory (GB):", (os.freemem() / 1024 / 1024 / 1024).toFixed(2));
// User information
console.log("Current User:", os.userInfo().username);
// Network information
console.log("Network Interfaces:", os.networkInterfaces());

//URL
import { URL } from 'url';
const myUrl = new URL('http://localhost:3000/products?id=10&name=laptop');
console.log(myUrl)
// Important properties
console.log("Protocol:", myUrl.protocol);
console.log("Host:", myUrl.host);
console.log("Pathname:", myUrl.pathname);
// Query parameters
console.log("ID:", myUrl.searchParams.get('id'));
console.log("Name:", myUrl.searchParams.get('name'));
// Modify query parameter
myUrl.searchParams.set('price', '50000');
console.log("Updated URL:", myUrl.toString());

//Querystring
import querystring from 'querystring';
// Sample query string
const qs = 'id=10&name=laptop&price=50000';
// Convert query string → object
const parsedData = querystring.parse(qs);
console.log("Parsed Object:", parsedData);
// Access individual values
console.log("ID:", parsedData.id);
console.log("Name:", parsedData.name);
// Convert object → query string
const stringData = querystring.stringify({
  category: 'electronics',
  brand: 'hp'
});
console.log("Stringified Query:", stringData);



