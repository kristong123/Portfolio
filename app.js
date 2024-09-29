/**
 * Kris Tong
 * 8/4/2024
 * Section AB: Tara and Rasmus
 *
 * Creates new endpoints for the API in the portfolio
 * that handles fetch and post requests from the client.
 */

"use strict";

const express = require('express');
const fs = require('fs').promises;
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());


/**
 * Asynchronously reads the content of the 'data.json' file and returns its content as a string.
 *
 * @return {Promise<string>} The content of the 'data.json' file.
 */
async function readData() {
  return await fs.readFile('data.json', 'utf8');
}

/**
 * Asynchronously reads the content of the 'data.json' file and returns
 * an array of songs.
 *
 * @return {Promise<Array>} An array of songs.
 */
async function getData() {
  return JSON.parse(await readData());
}

/**
 * Endpoint to get a random song
 */
app.get('/api/song', async (req, res) => {
  try {
    const songs = (await getData()).songs;
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    res.json({ song: randomSong });
  } catch (err) {
    res.status(500).send('Server error while fetching random song');
  }
});

/**
 * Endpoint to get all songs
 */
app.get('/api/songs', async (req, res) => {
  try {
    const songs = (await getData()).songs;
    res.json({ songs: songs });
  } catch (err) {
    res.status(500).send('Server error while fetching songs');
  }
});

/**
 * Endpoint to add to the recommendations
 */
app.post('/api/recommendations', async (req, res) => {
  try {
    const newSong = req.body.song;
    if (!newSong) {
      return res.status(400).send('Song is required');
    }
    const data = await getData();
    data.recommendations.push(newSong);
    await fs.writeFile('data.json', JSON.stringify(data, null, 2));
    res.send('Song added successfully');
  } catch (err) {
    res.status(500).send('Server error while adding song to recommendations');
  }
});

/**
 * Endpoint to get all song recommendations
 */
app.get('/api/recommendations', async (req, res) => {
  try {
    const songs = (await getData()).recommendations;
    res.json({ recommendations: songs });
  } catch (err) {
    res.status(500).send('Server error while fetching recommendations');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
