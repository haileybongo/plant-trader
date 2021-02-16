import React, { Component } from 'react'
import { editProfile } from '../actions/editProfile'
import { withAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux'

export class EditProfile extends Component {


profileHandler = async( event) => {
    event.preventDefault()
    try{
    const { user } = this.props.auth0;
    const { getAccessTokenSilently } = this.props.auth0;
    const token = await getAccessTokenSilently();
    const formData = new FormData(event.target)
    this.props.editProfile(formData, user.sub, token)}
    catch(error){
        console.log(error)
        }
    }


    render() {
        return (
            <div>
                    <form onSubmit={this.profileHandler} >
                    <label htmlFor="Username">
                        Username
                        <input type="text" name="username" value={this.props.user ? this.props.user.username : null}/>
                    </label>
                    <label htmlFor="Bio" >
                        Bio
                        <input type="text" name="bio" value={this.props.user ? this.props.user.bio :null}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form> 
            </div>
        )
    }
}

export default withAuth0(connect (null, { editProfile } )(EditProfile))
