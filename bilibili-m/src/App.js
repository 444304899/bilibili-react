import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Channel from './components/Channel/Channel';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={Home} exact />
        <Route path='/channel' component={Channel} />
      </Router>
    </div>
  );
}

export default App;
