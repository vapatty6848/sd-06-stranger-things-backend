const frisby = require('frisby');
const flipout = require('flipout');
const data = require('../data/dataset/stranger-things-characters.json');
require('dotenv').config();

const flipData = data.map(({ name, origin, status }) => ({
  name: flipout(name),
  origin: flipout(origin),
  status: flipout(status),
}));
describe('6 - Verifica se a API esta funcional no heroku', () => {
  it('Verifica se uma chamada para o endpoint hawkins funciona', async () => {
    await frisby
      .get(process.env.HAWKINS_URL)
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        JSON.parse(body).forEach((character) => {
          expect(data).toContainEqual(character);
        });
      });
  });

  it('Verifica se uma chamada para o endpoint upsideDown funciona', async () => {
    await frisby
      .get(process.env.UPSIDEDOWN_URL)
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        JSON.parse(body).forEach((character) => {
          expect(flipData).toContainEqual(character);
        });
      });
  });
});
