  
import React from 'react'


const Home = (props) => {
  debugger

  return (
    <div style={{fontSize: '40px',   float:'left', fontWeight: '900'}} className="container" width="100px" >
        <br/>
        Plantstagram 
        {props.images.allImages ? props.images.allImages.map( image => <div > <img src={image.attributes.get_image_url} className="feed-picture"/>  <div> {image.attributes.caption} </div></div>) : null}
    </div>

  )
}

export default Home;