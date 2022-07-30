import './App.css';
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Plans from './components/Plans';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Plans />
    </div>
  );
}

export default App;
