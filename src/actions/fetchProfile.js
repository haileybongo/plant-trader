export const fetchProfile = (userId, token) => {



    return (dispatch) => {
      fetch('http://localhost:3000/api/users/' +  userId , {
       headers: {
           Authorization: `Bearer ${token}`
         },
      })
      .then(response => response.json())
      .then(data => dispatch({type: 'GET_USER_INFO', profile: data.data.attributes}) )
       }
  }

  //dispatch({type: 'GET_USER_INFO', profile: data})