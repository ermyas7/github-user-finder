import {
    SEARCH_USERS,
    CLEAR_USER,
    GET_USER,
    GET_REPOS,
    SET_LOADING
}from './../types';

export default (state, action) => {
    switch(action.type){
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }

        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            }
        
        default:
            return state    
    }

} 