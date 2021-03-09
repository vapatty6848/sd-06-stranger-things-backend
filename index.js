const express = require('express');
const cors = require('cors');
require('dotenv').config();

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
// Gargani no slack: https://trybecourse.slack.com/archives/C016CCMKN9E/p1615241356315900?thread_ts=1615234819.284300&cid=C016CCMKN9E
const hereIsTheUpsideDown = (process.env.UPSIDEDOWN_MODE === 'true');
// console.log(hereIsTheUpsideDown);
app.get('/', (req, res) => {
  const characters = strangerThingsService.search(
    req.query,
    hereIsTheUpsideDown,
  );

  res.status(200).json(characters);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
