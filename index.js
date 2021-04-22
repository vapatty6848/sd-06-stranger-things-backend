const express = require('express');
const cors = require('cors');
require('dotenv').config();

const strangerThingsDataset = require('./data/dataset/stranger-things-characters.json');
const StrangerThingsRepository = require('./data/repository/StrangerThings');
const StrangerThingsService = require('./services/StrangerThings');

const app = express();

const { PORT, UPSIDEDOWN_MODE } = process.env;

const strangerThingsService = new StrangerThingsService(
  strangerThingsRepository,
);

const strangerThingsRepository = new StrangerThingsRepository(
  strangerThingsDataset,
);

app.use(cors());

const hereIsTheUpsideDown = (string) => {
  if (string === 'true') return true;
  return false;
};

app.get('/', (req, res) => {
  const characters = strangerThingsService.search(
    req.query,
    hereIsTheUpsideDown(UPSIDEDOWN_MODE),
  );

  res.status(200).json(characters);
});

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
