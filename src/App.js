import React from 'react';
import './App.css';
import TodayPicContainer from './todayPic/todayPicContainer';
import CarouselContainer from './carousel/carouserlContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">          
      </header>
      <div> 
          <TodayPicContainer/>
          <div className="blueMarbleContainer">
            <CarouselContainer/>
          </div>

        
      </div>
    </div>
  );
}

export default App;
