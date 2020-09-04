const { scripts } = require('../package.json');

describe('4- Verifica se os scripts do package.json estão corretos', () => {
  it('Verifica se o script start esta correto', () => {
    const scriptParts = scripts.start.split(' ');
    expect(scripts).toHaveProperty('start');
    expect(scriptParts[0]).toMatch(/^pm2$|^pm2-/);
    expect(scriptParts).toContain('start');
    expect(scriptParts).toContain('ecosystem.config.yml');
  });
  it('Verifica se o script start:dev esta correto', () => {
    const scriptParts = scripts['start:dev'].split(' ');
    expect(scripts).toHaveProperty('start:dev');
    expect(scriptParts[0]).toMatch(/^pm2$|^pm2-/);
    expect(scriptParts).toContain('start');
    expect(scriptParts).not.toContain('ecosystem.config.yml');
    expect(scriptParts).toContain('--watch');
  });
});
