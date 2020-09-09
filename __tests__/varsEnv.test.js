require('dotenv').config();

describe('Verifica as variáveis de ambiente', () => {
  const apiPort = process.env.PORT;
  const updasideMode = process.env.UPSIDEDOWN_MODE;

  it('Verifica se a variável da PORT existe', () => {
    expect(apiPort).toBeDefined();
  });
  it('Verifica se a variável de ambiente UPSIDEDOWN_MODE existe e se ela é um boleano', () => {
    expect(updasideMode).toBeDefined();
    expect(['true', 'false']).toContain(updasideMode);
  });
});
