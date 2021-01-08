import React, { Component } from 'react'
import { uploadImage } from '../actions/uploadImage'
import { withAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux'

export class EditProfile extends Component {


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default withAuth0(EditProfile)
