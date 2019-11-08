import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' render={ props => (
              <Home {...props} />
            )} />
            <Route path='/about' render={ props => (
              <About {...props} />
            )} />
            <Route path='/contact' render={ props => (
              <Contact {...props} />
            )} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
