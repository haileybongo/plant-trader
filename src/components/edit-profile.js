import React, { Component } from 'react'
import { editProfile } from '../actions/editProfile'
import { withAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux'

export class EditProfile extends Component {


    state = {
        username: this.props.user ? this.props.user.username : null,
        bio: this.props.user ? this.props.user.bio : null
      }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }


profileHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    this.props.editProfile(formData, this.props.user.authID, this.props.user.token)
    }


    render() {
        return (
            <div>
                    <form onSubmit={this.profileHandler} >
                    <label htmlFor="Username">
                        Username
                        <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
                    </label>
                    <label htmlFor="Bio" >
                        Bio
                        <input type="text" name="bio" onChange={this.handleChange} value={this.state.bio}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form> 
            </div>
        )
    }
}

export default withAuth0(connect (null, { editProfile } )(EditProfile))
