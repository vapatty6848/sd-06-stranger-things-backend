const { devDependencies } = require('../package.json');

describe('2-Verifica se o modulo pm2 foi instalado no projeto', () => {
  it('Veficia se o pm2 foi instalado no projeto e se está como dependencia de desenvolvimento', () => {
    expect(devDependencies).toHaveProperty('pm2');
  });
});
