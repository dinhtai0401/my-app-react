import React from 'react';
import './App.model.css'



export default function Header(props) {


  return (
    <>
    <header>
  <div class="netflixLogo">
    <a id="logo" href="#home"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" alt="Logo Image" /></a>
  </div>
  <nav class="main-nav">
    <a href="#home">Home</a>
    <a href="#tvShows">TV Shows</a>
    <a href="#movies">Movies</a>
    <a href="#originals">Originals</a>
    <a href="#">Recently Added</a>
    <a href="#">Portfolio</a>
  </nav>
  <nav class="sub-nav">
    <a href="#"><i class="fas fa-search sub-nav-logo"></i></a>
    <a href="#"><i class="fas fa-bell sub-nav-logo"></i></a>
    <a>Search</a>
    <input type="text" name="search" />
    <a href="#">Account</a>
  </nav>
    </header>
  </>
  )
}
