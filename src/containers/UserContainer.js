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
import { fetchProfile } from '../actions/fetchProfile'
import EditProfile from '../components/edit-profile';


class UserContainer extends React.Component {

    componentDidMount() {       
        const authLoading = async() => {
            try{
                const { getAccessTokenSilently } = this.props.auth0;
                const token = await getAccessTokenSilently();
                const { user } = this.props.auth0;
                    this.props.updateCredentials(user)
                    this.props.fetchUserImages(user.sub, token)
                    this.props.fetchProfile(user.sub, token) 
            }
            catch{ debugger}
            
    }
    authLoading();
}
    

    render() {
        debugger

        return(
            <div>
                <Switch>
                <Route path="/profile" render={() => <Profile user={this.props.user} images={this.props.images} /> }/>
                <ProtectedRoute path="/external-api" component={ExternalApi} />
                <Route path="/upload-image" render={() => <UploadImage images={this.props.images} />}/>  
                <Route path="/edit-profile" render={() => <EditProfile user={this.props.user} />}/>  
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        images: state.Pictures,
        user: state.User
    }
}


export default withAuth0(connect (mapStateToProps, { fetchUserImages, updateCredentials, fetchProfile})(UserContainer))
