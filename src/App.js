import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './screens/Home/Home';
import Second from './screens/Second';
import Third from './screens/Third';

const App = () => {
  return(
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/second" component={Second}/>
      <Route exact path="/third" component={Third}/>
    </Router>
  )
}

export default App;