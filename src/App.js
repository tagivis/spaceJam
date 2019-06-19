import React from 'react';

import './App.css';
import TodayPicContainer from './todayPic/todayPicContainer';
import BlueMarbleComponent from './blueMarble/blueMarbleComponent';



function App() {
  return (
    <div className="App">
      <header className="App-header">
          
      </header>
      <div className="Information-display">
        <TodayPicContainer/>
        <BlueMarbleComponent/>
      </div>
      <footer className="App-footer" >

      </footer>
        
        
    </div>
  );
}

export default App;
