  
import React from 'react'


const Like = (props) => {


  const handleLike = async () => {
        try{
        const { getAccessTokenSilently } = this.props.auth0;
        const token = await getAccessTokenSilently();
        this.props.likePhoto(props.user, props.image, token)}
        catch(error){
            console.log(error)
            }
            
        }

  return (
    <div  className="container" width="100px" >
        <br/>
        <button onClick={ ()=> handleLike()}>Like </button>
    </div>

  )
}

export default Like;