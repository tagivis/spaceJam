import React from 'react';
import './App.css';
import TodayPicContainer from './todayPic/todayPicContainer';
import BlueMarbleContainer from './blueMarvel/blueMarbleContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <TodayPicContainer/>
          <div className="blueMarbleContainer">
          <BlueMarbleContainer/>
          </div>
      </header>
    
    </div>
  );
}

export default App;
