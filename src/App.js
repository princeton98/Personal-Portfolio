import React from 'react';
import Buttons from './components/Buttons'
import './App.css';
import Information from './components/Information'
import Bottom from './components/Bottom'

function App() {
  return (
    <div className="App">
      <Information></Information>
      <Buttons></Buttons>
      <Bottom></Bottom>
    </div>
  );
}

export default App;
