export const uploadImage = (formData, email, token) => {

     return (dispatch) => {
       fetch('http://localhost:3000/api/pictures', {
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