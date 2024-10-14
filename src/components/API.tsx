import React, { useState } from 'react';
import { fetchData } from '../utils/api';

interface Game {
  title: string;
  thumb: string;
}

interface Amiibo {
  name: string;
  image: string;
}

const API: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [amiibos, setAmiibos] = useState<Amiibo[]>([]);

  const displayGames = async () => {
    const data = await fetchData('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15');
    setGames(data);
  };

  const displayAmiibo = async () => {
    const data = await fetchData('https://www.amiiboapi.com/api/amiibo/?name=mario');
    setAmiibos(data.amiibo);
  };

  return (
    <section id="api">
      <div id="api-title">
        <h1>API's</h1>
      </div>
      <div id="api-content">
        <p>
          <span className="styled-link" onClick={displayGames}>Click here</span> to view a list of games on the cheapshark API.
        </p>
        {games.length > 0 && (
          <div id="cheapshark-games">
            {games.map((game, index) => (
              <div key={index} id="cheapshark-game">
                <p>{game.title}</p>
                <img src={game.thumb} alt={game.title} />
              </div>
            ))}
          </div>
        )}
        <p>
          <span className="styled-link" onClick={displayAmiibo}>Click here</span> to view a list of Mario Amiibo.
        </p>
        {amiibos.length > 0 && (
          <div id="amiibos">
            {amiibos.map((amiibo, index) => (
              <div key={index} id="amiibo">
                <p>{amiibo.name}</p>
                <img src={amiibo.image} alt={amiibo.name} />
              </div>
            ))}
          </div>
        )}
        <p>
          <span className="styled-link" onClick={() => fetchData('https://DICTIONARY.ORG')}>Click here</span> to cause an api error.
        </p>
      </div>
    </section>
  );
};

export default API;