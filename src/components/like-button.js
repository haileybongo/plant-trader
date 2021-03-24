  
import React from 'react'


const Like = (props) => {

  const handleLike = () => {
        props.likeImage(props.user, props.image)         
        }

  return (
    <div  className="container" width="100px" >
        <br/>
        <button onClick={handleLike}>Like </button>
    </div>

  )
}

export default Like;