import React from "react";
import { useAuth0 } from "@auth0/auth0-react";



const DisplayPictures = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
 
    </div>
  );
};


export default DisplayPictures
