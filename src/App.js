import React, { Component } from 'react';

//import Layout from './components/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/Navigation/NavigationBar/NavigationBar';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      
        <div className="Content">
          <NavigationBar/>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </div>
      
    );
  }
}

export default App;
