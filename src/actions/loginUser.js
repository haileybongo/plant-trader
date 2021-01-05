
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginUser = () => {

  
  const { getAccessTokenSilently } = useAuth0();
  const { user } = useAuth0();
  const { email, name } = user;
    

  const callSecureApi = async () => {
    try {
        
      const token = await getAccessTokenSilently();

      const response = await fetch('http://localhost:3000/api/users/login/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
         body: JSON.stringify({
             email: email,
             username: name
         })
       })
       .then(response => response.json())
       .then(data => dispatch({type: 'LOGIN_USER', playlists: data}) )
    } catch (error) {
      debugger;
    }
  };

};

export default LoginUser;