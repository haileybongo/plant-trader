export const likeImage = (user, image, token) => {

    return (dispatch) => {
      fetch('http://localhost:3000/api/users/' + userId, {
       headers: {
           Authorization: `Bearer ${token}`
         },
       method: 'PATCH',
       body: formData
      })
      .then(response => response.json())
      .then(data => dispatch({type: 'GET_USER_INFO', profile: data.data.attributes})  )
       }
  }