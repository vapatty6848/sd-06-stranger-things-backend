require('dotenv').config();

describe('1-Verifica se existem as variáveis de ambiente corretas', () => {
  const apiPort = process.env.API_PORT;
  const updasideMode = process.env.UPSIDEDOWN_MODE;

  it('Verifica se a variável da API_PORT existe', () => {
    expect(apiPort).toBeDefined();
  });
  it('Verifica se a variável UPSIDEDOWN existe e esta correta', () => {
    expect(updasideMode).toBeDefined();
    expect(['true', 'false']).toContain(updasideMode);
  });
});
