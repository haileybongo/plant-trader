import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import UploadImage from '../components/upload-image';
import Profile from '../components/profile';
import ExternalApi from '../components/external-api';
import ProtectedRoute from "../auth/protected-route";



class UserContainer extends React.Component {


    render() {
       
        return(
            <div>
                <Switch>
                <ProtectedRoute path="/profile" component={Profile} />
                <ProtectedRoute path="/external-api" component={ExternalApi} />
                <ProtectedRoute path="/upload-image" component={UploadImage} />
                </Switch>
            </div>
        )
    }

}


export default connect (null, null )(UserContainer)
