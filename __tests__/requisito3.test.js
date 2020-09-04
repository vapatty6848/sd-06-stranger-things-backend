const fs = require('fs');
const yml = require('js-yaml');

describe('3-Verifica a configuração do ecosystem', () => {
  const ecosystem = yml.safeLoad(fs.readFileSync('ecosystem.config.yml', 'utf8'));
  const config = ecosystem.apps[0];

  it('O modo de execução deve estar configurado para cluster', () => {
    expect(config).toHaveProperty('exec_mode');
    expect(config.exec_mode).toEqual('cluster');
  });

  it('Deve haver 2 instancias do processo ', () => {
    expect(config).toHaveProperty('instances');
    expect(config.instances).toEqual(2);
  });

  it('O modo watch deve estar desativado ', () => {
    expect(config.watch).not.toBeTruthy();
  });

  it('O processo deve ser reiniciado caso consuma mais de 200MB de memória ', () => {
    expect(config).toHaveProperty('max_memory_restart');
    expect(config.max_memory_restart).toEqual('200M');
  });
});
