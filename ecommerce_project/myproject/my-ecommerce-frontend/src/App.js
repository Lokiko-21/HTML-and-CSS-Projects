import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Products from '/Products/Products';
import FAQ from './FAQ/FAQ';
import Contact from './Contact/Contact';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <route exact path="/" component={Home} />
          <route path="/products" component={Products} />
          <route path="/faq" component={FAQ} />
          <route path="contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;