import React from 'react';
import './App.css';
import MainPage from './components/MainPage.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import LoginAndRegisterView from './components/LoginAndRegisterView.js';
import PostView from './components/PostView.js';
import DetailsMovie from './components/DetailsMovie';
import InformationUpdateMovie from './components/InformationUpdateMovie.js';


class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <MainPage />
        <Footer />
      </div>
    );
  }
}


export default App;
