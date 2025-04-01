const url = require('url')
const myURL = url.parse('https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice')
console.log(myURL);
console.log(myURL.hostname);
console.log(myURL.query)