import React from 'react';
import NavBar from './components/nav-bar';
import Home from './components/home';
import {Route,} from 'react-router-dom';
import UserContainer from './containers/UserContainer'

class App extends React.Component {


  render(){
  return (
    <div className="App" >
      <NavBar/>
      <Route exact path='/' component={Home}/> 
      <UserContainer />
    </div>
  );}
}

export default App;