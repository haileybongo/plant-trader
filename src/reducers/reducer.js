
import { combineReducers } from "redux";

const reducer = combineReducers({


  });
   
   
export default reducer;

function userreducer(state = [], action)  {
    switch (action.type) {
        case 'FETCH_PLAYLISTS':
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



    







