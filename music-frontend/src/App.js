import React from 'react';
import axios from 'axios';
import Piano from './components/piano.js';

function App() {
  const sendMelody = () => {
    const melody = ['C4', 'E4', 'G4'];  // Example melody data
    axios.post('http://localhost:8000/api/generate_music/', { melody })
      .then(response => console.log(response.data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <Piano></Piano>
    </div>
  );
}

export default App;
