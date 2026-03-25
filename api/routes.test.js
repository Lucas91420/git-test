const routes = require('./routes');

test('route / existe', () => {
  expect(routes['/']).toBeDefined();
  expect(routes['/'].status).toBe(200);
});

test('route /health retourne OK', () => {
  expect(routes['/health']).toBeDefined();
  expect(routes['/health'].message).toBe('OK');
});

test('route inconnue est undefined', () => {
  expect(routes['/inconnu']).toBeUndefined();
});
