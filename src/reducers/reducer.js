
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
                email: action.data.email,
                name: action.data.name,
                username: action.data.nickname,
                authID: action.data.sub
            }
        case 'ADD_PLAYLIST':
            return (
                action.playlists.data
            )
        case 'DELETE_PLAYLIST':
            const idx = state.findIndex(playlist => playlist.id === action.id);
            return [...state.slice(0,idx), ...state.slice(idx+1)]  
        
        default:
            return state;
            }
        }


function Pictures( state = [], action){
    switch(action.type){
        case 'FETCH_USER_PICTURES':
            return{
                userimages: action.images.data
            }
        default:
            return state;
                
    }
}


    







