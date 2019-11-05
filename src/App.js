import React from 'react';
import Header from './components/Header';
import Jumbotron from './components/JumboTron';
import GameArea from './components/GameArea';
import Footer from './components/Footer';
function App() {
  return (
    <div >
      <Header/>
      <div className="container">
        <Jumbotron/>
        <GameArea/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
