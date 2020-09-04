const fs = require('fs');

describe('5-Verifica se a configuração do arquivo Procfile esta correta', () => {
  const [type, script] = fs.readFileSync('Procfile', 'utf8').split(':');

  it('Verifica se o dyno foi configurado para o tipo web', () => {
    expect(type).toEqual('web');
  });
  it('Verifica se o script esta correto', () => {
    const scriptParts = script.trim().split(' ');
    expect(scriptParts[0]).toMatch(/^pm2$|^pm2-/);
    expect(scriptParts).toContain('start');
    expect(scriptParts).toContain('ecosystem.config.yml');
  });
});
