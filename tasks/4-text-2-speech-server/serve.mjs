import express from 'express';
import tts from './tts.mjs';

const server = express();
const port = 3000;

server.get('/', (req, res) => {
    res.send('Hello Golem!')
});

server.get('/tts', async (req, res) => {
  const textToSpeak = req.query.q;

  if (!textToSpeak) {
    return res.send('Please provide query parameter "q" (eg. "?q=text") to continue...');
  }

  const fileName = Date.now();

  const result = await tts(textToSpeak, Date.now());

  if (result) {
    const file = `./output/${fileName}.mp3`;
    return res.download(file);
  }

  return res.send('An error occurred while generating TTS from query "' + textToSpeak + '".');
})


server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
