

export const uploadImage = (formData, email, token) => {

    
    let data = {
         file: formData,
         email: email
     }

     debugger
     return (dispatch) => {
       fetch('http://localhost:3000/api/pictures', {
        headers: {
            Authorization: `Bearer ${token}`
          },
        method: 'POST',
        body: formData
       })
       .then(response => response.json())
       .then(data => dispatch({type: 'FETCH_IMAGE', images: data}) )
        }
   }