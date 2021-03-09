const { dependencies } = require('../package.json');

describe.skip('Verifica se o modulo pm2 foi instalado no projeto', () => {
  it('Será validado que o modulo pm2 está instalado nas dependências', () => {
    expect(dependencies).toHaveProperty('pm2');
  });
});
