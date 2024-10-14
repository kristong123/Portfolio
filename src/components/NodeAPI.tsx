import React, { useState, useEffect } from 'react';
import { fetchData, postRequest } from '../utils/api';

interface Song {
  title: string;
  artist: string;
  img: string;
}

const NodeAPI: React.FC = () => {
  const [randomSong, setRandomSong] = useState<Song | null>(null);
  const [allSongs, setAllSongs] = useState<Song[]>([]);
  const [recommendations, setRecommendations] = useState<Song[]>([]);
  const [newSong, setNewSong] = useState<Song>({ title: '', artist: '', img: '' });

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const displayRandomSong = async () => {
    const data = await fetchData('/api/song');
    setRandomSong(data.song);
  };

  const displayAllSongs = async () => {
    const data = await fetchData('/api/songs');
    setAllSongs(data.songs);
  };

  const fetchRecommendations = async () => {
    const data = await fetchData('/api/recommendations');
    setRecommendations(data.recommendations);
  };

  const addRecommendation = async () => {
    if (newSong.title && newSong.artist && newSong.img) {
      await postRequest('/api/recommendations', { song: newSong });
      setRecommendations([...recommendations, newSong]);
      setNewSong({ title: '', artist: '', img: '' });
    }
  };

  return (
    <section id="node-api">
      <div id="node-api-title">
        <h1>Node API</h1>
      </div>
      <div id="node-api-content">
        <p>
          <span className="styled-link" onClick={displayRandomSong}>Click here</span> to view one of the songs I've been listening to.
        </p>
        {randomSong && (
          <div className="song-display">
            <img src={randomSong.img} alt={`${randomSong.title} by ${randomSong.artist}`} />
            <div>
              <h2>{randomSong.title}</h2>
              <h3>{randomSong.artist}</h3>
            </div>
          </div>
        )}
        <p>
          <span className="styled-link" onClick={displayAllSongs}>Click here</span> to view some of the songs I've been listening to.
        </p>
        {allSongs.length > 0 && (
          <div className="song-container">
            {allSongs.map((song, index) => (
              <div key={index} className="song-display">
                <img src={song.img} alt={`${song.title} by ${song.artist}`} />
                <div>
                  <h2>{song.title}</h2>
                  <h3>{song.artist}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
        <p>Click here to submit a song recommendation after filling out the boxes.</p>
        <input
          type="text"
          placeholder="Song Title"
          value={newSong.title}
          onChange={(e) => setNewSong({...newSong, title: e.target.value})}
        />
        <input
          type="text"
          placeholder="Song Artist"
          value={newSong.artist}
          onChange={(e) => setNewSong({...newSong, artist: e.target.value})}
        />
        <input
          type="text"
          placeholder="Song Image URL"
          value={newSong.img}
          onChange={(e) => setNewSong({...newSong, img: e.target.value})}
        />
        <button onClick={addRecommendation}>Submit Recommendation</button>
        <h3>Current Recommendations:</h3>
        <div className="song-container">
          {recommendations.map((song, index) => (
            <div key={index} className="song-display">
              <img src={song.img} alt={`${song.title} by ${song.artist}`} />
              <div>
                <h2>{song.title}</h2>
                <h3>{song.artist}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NodeAPI;