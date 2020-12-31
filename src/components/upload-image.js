import React, { Component } from 'react';
import uploadImage from './actions/uploadImage'

export class UploadImage extends Component {


state = { selectedFile: null }

fileChangedHandler = event => {
debugger
  this.setState({ selectedFile: event.target.files[0] })
}

uploadHandler = () => {
    uploadImage(his.state.selectedFile)
}


    render() {
        return (
            <div>
                <input type="file" onChange={this.fileChangedHandler}/>
                <button onClick={this.uploadHandler}>Upload!</button>
            </div>
        )
    }
}

export default UploadImage
