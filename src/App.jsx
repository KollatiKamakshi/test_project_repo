import { useState } from 'react'

import './App.css'

function App() {
  const [playlist, setPlaylist] = useState([
    'Song 1',
    'Song 2',
    'Song 3',
    'Song 4',
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSong = () => {
    setCurrentIndex((prevIndex) => prevIndex === playlist.length - 1 ? 0 : prevIndex + 1);
  };
  const prevSong = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? playlist.length - 1 : prevIndex - 1);
  };

  const jumpToSong = (index) => {
    setCurrentIndex(index);
  };

  const removeSong = (index) => {
    const updated = [...playlist];
    updated.splice(index, 1);
    setPlaylist(updated);
    if (index < currentIndex) {
      setCurrentIndex(currentIndex - 1);
    }
    else if (index === currentIndex) {
      setCurrentIndex((prev) => prev === playlist.length - 1 ? 0 : prev);

    }
  };



  return (
      <div className="App">
        <h1>Music Playlist</h1>
        <h2> now playing:  {playlist[currentIndex] || 'Nothing to play!'}</h2>
        <button onClick={prevSong} disabled={playlist.length === 0}>Previous</button>
        <button onClick={nextSong} disabled={playlist.length === 0}>Next</button>
        <ul>
          {playlist.map((song, index) => (
            <li key={index} className={index === currentIndex ? 'active' :
              ''}>
              <span onClick={() => jumpToSong(index)}>{song}</span>
              <button onClick={() => removeSong(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
     
  );
}

export default App
