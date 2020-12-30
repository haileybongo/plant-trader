
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ExternalApi = () => {
  const serverUrl = 'http://localhost:3000/'

  const { getAccessTokenSilently } = useAuth0();

  const { user } = useAuth0();
  const { email } = user;

  const callSecureApi = async () => {
    try {
        
      const token = await getAccessTokenSilently();
      debugger
      

      const response = await fetch(`${serverUrl}/api/items`,{
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`},
        body: JSON.stringify({
            email: email
            })
        });

      const responseData = await response.json();

      debugger
    } catch (error) {
      debugger;
    }
  };

  return (
    <div className="container">
      <h1>External API</h1>
      <p>
        Use these buttons to call an external API. The protected API call has an
        access token in its authorization header. The API server will validate
        the access token using the Auth0 Audience value.
      </p>
      <div
        className="btn-group mt-5"
        role="group"
        aria-label="External API Requests Examples"
      >

        <button
          type="button"
          className="btn btn-primary"
          onClick={callSecureApi}
        >
          TestAPI
        </button>
      </div>

    
    </div>
  );
};

export default ExternalApi;