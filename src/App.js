import React, { Component } from 'react';

//import Layout from './components/Layout/Layout';
//import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/Navigation/NavigationBar/NavigationBar';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


class App extends Component {
  render() {
    return (
      
        <div className="Content">
          <NavigationBar/>
          <BurgerBuilder/>
          hello
        </div>
      
    );
  }
}

export default App;
