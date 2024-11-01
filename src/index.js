const http = require('http');

const server = http.createServer(async (req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        console.log('hello!');
        res.end;
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});