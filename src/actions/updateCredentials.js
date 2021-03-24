export const updateCredentials = (userInfo, token) => {

    return (dispatch) => {
        dispatch({type: 'UPDATE_USER_CREDENTIALS', data: userInfo, token})}

  }