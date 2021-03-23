export const fetchAllImages = (token) => {

    return (dispatch) => {
      fetch('http://localhost:3000/api/pictures/', {
       headers: {
           Authorization: `Bearer ${token}`
         },
      })
      .then(response => response.json())
      .then(data => dispatch({type: 'FETCH_ALL_IMAGES', images: data}) )
       }
  }