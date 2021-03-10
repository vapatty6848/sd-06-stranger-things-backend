const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const { UPSIDEDOWN_MODE } = process.env;
// utilizando valores default para o caso do arquivo de variaveis de ambiente não existir
// ou faltar uma variavel de ambiente

const upsideDown = UPSIDEDOWN_MODE === 'true';

const strangerThingsDataset = require('./data/dataset/stranger-things-characters.json');
const StrangerThingsRepository = require('./data/repository/StrangerThings');
const StrangerThingsService = require('./services/StrangerThings');

const app = express();

const strangerThingsRepository = new StrangerThingsRepository(strangerThingsDataset);
const strangerThingsService = new StrangerThingsService(strangerThingsRepository);

app.use(cors());

app.get('/', (req, res) => {
  const characters = strangerThingsService.search(req.query, upsideDown);

  res.status(200).json(characters);
});

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
  console.log('varialvel ', upsideDown);
});
