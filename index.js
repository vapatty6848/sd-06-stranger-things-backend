const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { PORT, UPSIDEDOWN_MODE } = process.env;

const strangerThingsDataset = require('./data/dataset/stranger-things-characters.json');
const StrangerThingsRepository = require('./data/repository/StrangerThings');
const StrangerThingsService = require('./services/StrangerThings');

const app = express();

const strangerThingsRepository = new StrangerThingsRepository(
  strangerThingsDataset,
);
const strangerThingsService = new StrangerThingsService(
  strangerThingsRepository,
);

app.use(cors());

let hereIsTheUpsideDown;
if (UPSIDEDOWN_MODE === 'false') {
  hereIsTheUpsideDown = false;
} else {
  hereIsTheUpsideDown = true;
}

app.get('/', (req, res) => {
  const characters = strangerThingsService.search(
    req.query,
    hereIsTheUpsideDown,
  );
  herokuconsole.log('upsidedown?', hereIsTheUpsideDown);
  res.status(200).json(characters);
});

app.listen(PORT || 3000, () => {
  console.log(`Escutando na porta ${PORT}`);
  console.log(process.env.UPSIDEDOWN_MODE);
  console.log(process.env.GITHUB_USER);
  console.log(process.env.PORT);
});
