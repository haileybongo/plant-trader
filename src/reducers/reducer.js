
import { combineReducers } from "redux";

const reducer = combineReducers({
    Pictures,
    User

  });
   
   
export default reducer;

function User(state = [], action)  {
    switch (action.type) {
        case 'UPDATE_USER_CREDENTIALS':
            return {
                ...state,
                email: action.data.email,
                name: action.data.name,
                username: action.data.nickname,
                authID: action.data.sub,
                token: action.token
            }
        case 'GET_USER_INFO':
            return {
                ...state,
                bio: action.profile.bio,
                username: action.profile.username
            }
        
        default:
            return state;
            }
        }


function Pictures( state = [], action){
  
    switch(action.type){
        case 'FETCH_USER_PICTURES':
            return{
                ...state,
                userimages: action.images.data
            }
        case 'FETCH_ALL_IMAGES':
                return{
                    ...state,
                allImages: action.images.data
                }
        default:
            return state;
                
    }
}


    







