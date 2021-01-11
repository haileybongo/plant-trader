import React, { Component } from 'react';
import { uploadImage } from '../actions/uploadImage'
import { withAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux'

class UploadImage extends Component {


uploadHandler = async( event) => {
    event.preventDefault()
    try{
    const { user } = this.props.auth0;
    const { getAccessTokenSilently } = this.props.auth0;
    const token = await getAccessTokenSilently();
    document.getElementById("id").value = this.props.auth0.user.sub
    const formData = new FormData(event.target)
    this.props.uploadImage(formData, user.sub, token)}
    catch(error){
        console.log(error)
        }
    }

   

    render() {
        debugger
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
                    <input type="hidden" name="id" id="id" />
                    <input type="submit" value="Submit"/>
                </form> 

                {this.props.images.userimages ? this.props.images.userimages.map( image => <div> <img src={image.attributes.get_image_url} /> </div>) : null}
            </div>
        )
    }
}



export default withAuth0( connect (null, {uploadImage})(UploadImage))

//{this.props.images.userimages ? this.props.images.userimages.map( image => <div> <img src={image.attrubutes.get_image_url} /> </div>) : null}
