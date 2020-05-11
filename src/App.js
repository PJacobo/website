import React, { Component } from 'react';
import './App.css';
import Case from './components/Case.js'
import Footer from './components/Footer.js'
import Head from './components/Head.js'
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Navigation from './components/Navigation.js'
import Services from './components/Services.js'
import Subscribe from './components/Subscribe.js'

class App extends Component {
  render() {
    return (
      <div>
      <Navigation></Navigation>
      <div id="colorlib-page">
        {/* <Head></Head> */}
        <Header></Header>
        <Hero></Hero>
        <Services></Services>
        <Case></Case>
        <Footer></Footer>
  
      </div>
      </div>

    );
  }
}

export default App;