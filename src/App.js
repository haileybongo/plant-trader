import React from 'react';
import NavBar from './components/nav-bar'
import Home from './components/home'
import {Route,} from 'react-router-dom'
import Profile from './components/profile';
import ExternalApi from './components/external-api';

class App extends React.Component {



  render(){
  return (
    <div className="App" >
      <NavBar/>
      <Route exact path='/' component={Home}/> 
      <Route path="/profile" component={Profile} />
      <Route path="/external-api" component={ExternalApi} />
    </div>
  );}
}

export default App;