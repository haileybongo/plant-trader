import React, { Component } from 'react'
import { likeImage } from '../actions/likeImage'
import { connect } from 'react-redux'
import Like from './like-button';

export class Home extends Component {

  render(){
  return (
    <div  className="container" width="100px" >
        <br/>
        <h1 style={{fontSize: '40px',   float:'left', fontWeight: '900', width: '100%'}}>Plantstagram </h1> <br/>
        <div>{this.props.images.allImages ? this.props.images.allImages.map( image => <div > {image.attributes.user.username} <img src={image.attributes.get_image_url} className="feed-picture"/>  
          <div> {image.attributes.caption} </div>
          <Like user={this.props.user} likeImage={this.props.likeImage} image ={image} token={this.props.token}/>
          <br/><br/></div>) : null} </div>
    </div>

  )
}
}

export default connect (null, { likeImage }) (Home)