import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About.js';
import Contact from './pages/Contact.js';




import { HashRouter as Router, Route } from "react-router-dom";


import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'


const Temp =(props)=>{
    console.log("render Temp")
    return (
        <div>
            {props.val}
        </div>
    )
}


class App extends Component {

    state = {
        val : 1
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({val:1})

        },2000)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("nextState: ", nextState);
        console.log("Current State:", this.state);

     return  (
         this.state.val === nextState.val ? false : true
     )

    }


  render() {
        console.log("render app")
    return (
        <Router>
            <div>
                <Navbar />
                <Temp val = {this.state.val}></Temp>
                <Jumbotron  title="About Me!" subtitle={this.state.val}/>
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
