// Create web server
// 1. create a web server
// 2. listen to port 3000
// 3. handle get request to /comments
// 4. respond with a list of comments as JSON

// 1. create a web server
const http = require('http');
const server = http.createServer();
// 2. listen to port 3000
server.listen(3000);
// 3. handle get request to /comments
server.on('request', (request, response) => {
    if (request.method === 'GET' && request.url === '/comments') {
        // 4. respond with a list of comments as JSON
        response.writeHeader(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify([]));
    }
});
    
