import React from 'react';
import NavBar from './components/nav-bar';
import {Route,} from 'react-router-dom';
import UserContainer from './containers/UserContainer'

class App extends React.Component {


  render(){
  return (
    <div className="App" >
      <NavBar/>
      <UserContainer />
    </div>
  );}
}

export default App;