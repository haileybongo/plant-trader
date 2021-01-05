
import { combineReducers } from "redux";

const reducer = combineReducers({
    UserReducer

  });
   
   
export default reducer;

function UserReducer(state = [], action)  {
    switch (action.type) {
        case 'LOGIN_USER':
            return (
                action.playlists.data
            )
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


function PictureReducer( state = [], action){
    switch(action.type){
        case 'FETCH_PICTURES':
            return(
                action.pictures.data
            )
    }
}


    







