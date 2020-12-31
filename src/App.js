import React from 'react';
import NavBar from './components/nav-bar';
import Home from './components/home';
import {Route,} from 'react-router-dom';
import UploadImage from './components/upload-image';
import Profile from './components/profile';
import ExternalApi from './components/external-api';
import ProtectedRoute from "./auth/protected-route";

class App extends React.Component {



  render(){
  return (
    <div className="App" >
      <NavBar/>
      <Route exact path='/' component={Home}/> 
      <ProtectedRoute path="/profile" component={Profile} />
      <ProtectedRoute path="/external-api" component={ExternalApi} />
      <ProtectedRoute path="/upload-image" component={UploadImage} />
    </div>
  );}
}

export default App;