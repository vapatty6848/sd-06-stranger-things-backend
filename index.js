require('dotenv')

const express = require('express');
const cors = require('cors');

const strangerThingsDataset = require('./data/dataset/stranger-things-characters.json');
const StrangerThing
sRepository = require('./data/repository/StrangerThings');
const StrangerThingsService = require('./services/StrangerThings');

const app = express();

const strangerThingsRepository = new StrangerThingsRepository(
  strangerThingsDataset,
);
const strangerThingsService = new StrangerThingsService(
  strangerThingsRepository,
);

app.use(cors());


const hereIsTheUpsideDown = 
process.env.UPSIDESOWN_MODE === true;

app.get('/', (request, response) => {
  const characters = strangerThingsService.search(
    request.query,
    hereIsTheUpsideDown,
  );

  response.status(200).json(characters);
});


const appPort = process.env.PORT || 3000;


app.listen(appPort, () => {
  console.log('Escutando na porta 3000');
});
