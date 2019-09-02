import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About.js';
import Contact from './pages/Contact.js';




import { HashRouter as Router, Route } from "react-router-dom";


import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'


class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Navbar />
                <Jumbotron  title="About Me!" subtitle="This page is all about me and my work!"/>
                <Route path="/" exact component={Home}></Route>
                <Route path="/about/:id" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Footer />
            </div>
        </Router>

    );
  }
}

export default App;
