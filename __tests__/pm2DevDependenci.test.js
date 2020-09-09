const { devDependencies } = require('../package.json');

describe('Verifica se o modulo pm2 foi instalado no projeto', () => {
  it('Veficia se o modulo pm2 esta instalado nas dependências de desenvolvimento', () => {
    expect(devDependencies).toHaveProperty('pm2');
  });
});
