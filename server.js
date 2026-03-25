require('dotenv').config();

const http = require('http');
const routes = require('./api/routes');

const PORT = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const logLevel = process.env.LOG_LEVEL || 'debug';

const server = http.createServer((req, res) => {
  const route = routes[req.url];
  if (route) {
    res.writeHead(route.status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: route.message, env }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not found' }));
  }
});

server.listen(PORT, () => {
  if (logLevel !== 'warn') {
    console.log(`[MAIN] Serveur démarré sur le port ${PORT} en mode ${env}`);
  }
});
