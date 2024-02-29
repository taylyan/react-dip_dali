import express from 'express'
import axios from "axios";

const router = express.Router();

const thingSpeakAPI = 'https://api.thingspeak.com/channels/1/fields/1/last.json?api_key=7JNHTJGWR1NBR2OX';

router.get('/thingspeak', async (req, res) => {
  try {
    const response = await axios.get(thingSpeakAPI);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching ThingSpeak data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export {router as apiRouter}
