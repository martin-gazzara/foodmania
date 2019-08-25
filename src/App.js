import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './screens/Home/Home';
import Search from './screens/Search';
import About from './screens/About';

const App = () => {
  return(
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/about" component={About}/>
    </Router>
  )
}

export default App;