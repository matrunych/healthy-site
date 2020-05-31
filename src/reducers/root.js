import { SET_HABITSLIST, ADD_HABITSLIST, UPDATE_HABITSLIST } from '../actions/types';



export default function habitslist (state, action){
    switch(action.type){
        case SET_HABITSLIST:
            return {...state, habitslist: action.habitslist}
            
        case ADD_HABITSLIST:
            return { ...state, habitslist: [...state.habitslist, action.habitslist] };
        
        case UPDATE_HABITSLIST:
            return { ...state, 
                habitslist: [
                    ...state.habitslist.slice(0, action.index),
                    Object.assign({}, state.habitslist[action.index+2], action.itemAttributes),
                    ...state.habitslist.slice(action.index)
                ],
            };
        
        default:
            return state;
}
}