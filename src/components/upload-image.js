import React, { Component } from 'react';
import { uploadImage } from '../actions/uploadImage'
import { withAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux'

class UploadImage extends Component {


state = { selectedFile: null }

fileChangedHandler = event => {
  this.setState({ selectedFile: event.target.files[0] })
}

uploadHandler = async( event) => {
    event.preventDefault()
    try{
    const { user } = this.props.auth0;
    const { getAccessTokenSilently } = this.props.auth0;
    const token = await getAccessTokenSilently();

    const formData = new FormData(event.target)

    this.props.uploadImage(formData, user.email, token)}
    catch(error){
        console.log(error)
        }
    }

// uploadHandler = () => {
//     this.props.uploadImage(this.state.selectedFile, "email", "token")
// }


    render() {
        return (
            <div>
                <form onSubmit={this.uploadHandler} >
                    <label htmlFor="caption">
                        Caption
                        <input type="text" name="caption" />
                    </label>
                    <label htmlFor="image" >
                        Upload image
                        <input type="file" name="image" />
                    </label>
                    <input type="hidden" name="email" value={this.props.auth0.user.email} />
                    <input type="submit" value="Submit"/>
                </form>   
            </div>
        )
    }
}

export default withAuth0(connect(null, {uploadImage})(UploadImage))

//<input type="file" onChange={this.fileChangedHandler}/>