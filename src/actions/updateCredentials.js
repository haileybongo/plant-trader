export const updateCredentials = (userInfo) => {
    
    return (dispatch) => {
        dispatch({type: 'UPDATE_USER_CREDENTIALS', data: userInfo})}

  }