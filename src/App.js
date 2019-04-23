import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Default from './pages/Default'
import SingleRecipe from './pages/SingleRecipe'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
      <Router>
          <main>
              {/*navbar*/}
          <Navbar />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/recipes" exact component={Recipes} />
              <Route path="/recipes/:id" component={SingleRecipe} />
              <Route component={Default} />
          </Switch>
          </main>
      </Router>
  );
}

// exact means that if the route does does not match, it will look for other matching paths, if no other paths are found, it will default to default

export default App;
