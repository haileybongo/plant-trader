export const uploadImage = (formData, userId, token) => {

     return (dispatch) => {
       fetch('http://localhost:3000/api/pictures/' + userId + '/new', {
        headers: {
            Authorization: `Bearer ${token}`
          },
        method: 'POST',
        body: formData
       })
       .then(response => response.json())
       .then(data => dispatch({type: 'FETCH_USER_PICTURES', images: data}) )
        }
   }