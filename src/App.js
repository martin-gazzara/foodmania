import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './screens/Home/Home';
import Recipe from './screens/Recipe/Recipe';
import About from './screens/About/About';



const App = () => {
  return(
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Recipe" component={Recipe}/>
        <Route exact path="/about" component={About}/>
      </Router>
  )
}

export default App;