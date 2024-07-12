import React from 'react';
import BasketballPlayerCard from './Component/BasketballPlayerCard';

const players = [
  {
    name: 'Joel Embiid',
    image: 'https://img.etimg.com/thumb/width-1600,height-900,imgsize-91994,resizemode-75,msid-104221835/news/international/us/i-want-to-honor-my-son-who-was-born-in-the-us-joel-embiid-to-represent-usa-in-paris-olympics.jpg',
    position: 'Center',
    stats: {
      pointsPerGame: 28.5,
      assistsPerGame: 4.6,
      reboundsPerGame: 11.0
    }
  },
  {
    name: 'Stephen Curry',
    image: 'https://www.ncaa.org/images/2024/2/8/CaitlinClark16_yRzGN.jpg?width=1920&height=1080&mode=crop&quality=80&format=jpg',
    position: 'Guard',
    stats: {
      pointsPerGame: 24.3,
      assistsPerGame: 6.5,
      reboundsPerGame: 4.6
    }
  },
  {
    name: 'LeBron James',
    image: 'https://cdn.vox-cdn.com/thumbor/ledcHlfCkd05tNLBGux-clCe3ec=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22786879/1333879386.jpg',
    position: 'Forward',
    stats: {
      pointsPerGame: 27.1,
      assistsPerGame: 7.4,
      reboundsPerGame: 7.4
    }
  },
  
  {
    name: 'Kevin Durant',
    image: 'https://miro.medium.com/v2/resize:fit:1240/1*Ion_RHfFsHvuVf42XOe0Vw.jpeg',
    position: 'Forward',
    stats: {
      pointsPerGame: 27.0,
      assistsPerGame: 5.3,
      reboundsPerGame: 7.1
    }
  },
  {
    name: 'Giannis Antetokounmpo',
    image: 'https://imageio.forbes.com/specials-images/imageserve/661ed6e51dba8edc23ec7c41/HIGH-SCHOOL-BASKETBALL--MAR-30-McDonald-s-All-American-Games-Portrait-Day/960x0.jpg?format=jpg&width=960',
    position: 'Forward',
    stats: {
      pointsPerGame: 29.5,
      assistsPerGame: 5.6,
      reboundsPerGame: 13.7
    }
  },
  {
    name: 'Kawhi Leonard',
    image: 'https://www.patriotledger.com/gcdn/authoring/images/smg/2024/07/11/USAT/74362173007-USATSI_23250340_1.jpeg?crop=3749,2109,x0,y0&width=660&height=371&format=pjpg&auto=webp',
    position: 'Forward',
    stats: {
      pointsPerGame: 24.8,
      assistsPerGame: 5.2,
      reboundsPerGame: 6.5
    }
  },
 
];

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {players.map((player, index) => (
        <BasketballPlayerCard key={index} player={player} />
      ))}
    </div>
  );
};

export default App;
