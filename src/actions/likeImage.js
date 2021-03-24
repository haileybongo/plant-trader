export const likeImage = (user, image) => {

    let data = {user, image};

    debugger

    return (dispatch) => {
      fetch('http://localhost:3000/api/likes', {
       headers: {
           Authorization: `Bearer ${user.token}`
         },
       method: 'POST',
       body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => dispatch({type: 'FETCH_ALL_IMAGES', images: data})  )
       }
  }