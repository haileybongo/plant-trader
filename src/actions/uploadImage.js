
export const uploadImage = () => {

    let data = {
         
     }
     
     debugger
     return (dispatch) => {
       fetch('http://localhost:3000/api/pictures/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
         body: JSON.stringify(data)
       })
       .then(response => response.json())
       .then(data => dispatch({type: 'FETCH_PLAYLIST', playlists: data}) )
     }
   
   }