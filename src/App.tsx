import React from 'react';
import './App.css';
import SpinButton from './components/SpinButton';

export enum Passenger {
  Adult = '성인',
  Child = '소아',
  Toddler = '유아',
}

function App() {
  return (
    <div className="App">
      <h1>승객 선택</h1>
      <SpinButton passenger={Passenger.Adult} />
      <SpinButton passenger={Passenger.Child} />
      <SpinButton passenger={Passenger.Toddler} />
    </div>
  );
}

export default App;
