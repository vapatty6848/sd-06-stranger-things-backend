const express = require('express');
const cors = require('cors');

require('dotenv').config();

// alteração da variável PORT com a ajuda e sugestão do Bruno Lemos:
const LOCALHOST_PORT = 3000;
const PORT = process.env.PORT || LOCALHOST_PORT;

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

/* Acho que finalmente o deploy será aceito. O problema era a comparação entre os valores
recebidos que sempre eram considerados true por serem string. Agradecida pelas ajudas e pelas
várias threads abertas no slack que falaram sobre isso */
const hereIsTheUpsideDown = process.env.UPSIDEDOWN_MODE === 'true';

app.get('/', (req, res) => {
  const characters = strangerThingsService.search(
    req.query,
    hereIsTheUpsideDown,
  );

  res.status(200).json(characters);
});

app.listen(PORT, () => {
  console.log('Escutando na porta', PORT);
});

/* estava com erros no deploy dos apps e achei a solução nas threads abertas pela turma no slack. */
