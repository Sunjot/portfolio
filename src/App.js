import React, { Component } from 'react';
import './Stylesheets/App.css';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Me from './Components/Me';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={Intro}/>
          <Route exact path="/me" component={Me}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
