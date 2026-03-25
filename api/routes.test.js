const routes = require('./routes');

// ─── Tests unitaires (70%) ───────────────────────────────────────
describe('Routes — existence', () => {
  test('route / est définie', () => {
    expect(routes['/']).toBeDefined();
  });

  test('route /api/health est définie', () => {
    expect(routes['/api/health']).toBeDefined();
  });

  test('route inconnue est undefined', () => {
    expect(routes['/inconnu']).toBeUndefined();
  });
});

describe('Routes — statuts HTTP', () => {
  test('route / retourne status 200', () => {
    expect(routes['/'].status).toBe(200);
  });

  test('route /api/health retourne status 200', () => {
    expect(routes['/api/health'].status).toBe(200);
  });
});

describe('Routes — messages', () => {
  test('route /api/health retourne OK', () => {
    expect(routes['/api/health'].message).toBe('OK');
  });

  test('route / contient un message de bienvenue', () => {
    expect(routes['/'].message).toContain('Bienvenue');
  });
});
