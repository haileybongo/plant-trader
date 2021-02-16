import React from "react";
import { useAuth0 } from "@auth0/auth0-react";



const Profile = (props) => {


  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={props.user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{props.user.username}</h2>
          <p className="lead text-muted">{props.user.email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(props.user, null, 2)}
        </pre>
      </div>
      {props.images.userimages ? props.images.userimages.map( image => <div> <img src={image.attributes.get_image_url} /> </div>) : null}
    </div>
  );
};


export default Profile
