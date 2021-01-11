import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import UploadImage from '../components/upload-image';
import Profile from '../components/profile';
import ExternalApi from '../components/external-api';
import ProtectedRoute from "../auth/protected-route";
import { fetchUserImages } from '../actions/fetchUserImages'
import { withAuth0 } from '@auth0/auth0-react';
import { updateCredentials } from '../actions/updateCredentials'


class UserContainer extends React.Component {

    componentDidMount() {       
        const authLoading = async() => {
            try{
                const { getAccessTokenSilently } = this.props.auth0;
                const token = await getAccessTokenSilently();
                const { user } = this.props.auth0;
                    this.props.updateCredentials(user)
                    this.props.fetchUserImages(user.sub, token) 
            }
            catch{ debugger}
            
    }
    authLoading();
}
    

    render() {
        return(
            <div>
                <Switch>
                <ProtectedRoute path="/profile" component={Profile} />
                <ProtectedRoute path="/external-api" component={ExternalApi} />
                <Route path="/upload-image" render={() => <UploadImage images={this.props.images} />}/>  
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        images: state.Pictures
    }
}


export default withAuth0(connect (mapStateToProps, { fetchUserImages, updateCredentials})(UserContainer))
