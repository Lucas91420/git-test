require('dotenv').config();

const http = require('http');

const PORT = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Bienvenue sur le serveur principal', env }));
});

server.listen(PORT, () => {
  console.log(`[FEATURE] Serveur démarré sur le port ${PORT} en mode ${env}`);
});
