import React from 'react';
import Buttons from './components/Buttons'
import './App.css';
import Information from './components/Information'
import Bottom from './components/Bottom'

function App() {
  return (
    <div className="App">
      <div className="Top">
      <Information></Information>
      <Buttons></Buttons>
      </div>
      <div className="Bottom">
      <Bottom></Bottom>
      </div>
    </div>
  );
}

export default App;
