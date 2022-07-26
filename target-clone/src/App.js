import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Header from './Components/Header'
import Headline from './Components/Headline';
import Banner from './Components/Banner';
import Jumbotron from './Components/Jumbotron';
import Cards from './Components/Cards';
import Sponsored from './Components/Sponsored';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <hr />
      <Headline />
      <Banner />
      <Jumbotron />
      <Cards />
      <Sponsored />
    </div>
  );
}

export default App;
