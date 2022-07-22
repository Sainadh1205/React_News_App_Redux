import { DISPLAY, HIDE } from './action.js'


let initialShowState = {
    show: false
}


export const showReducer = (state = initialShowState, action) =>{
    switch(action.type){
        case DISPLAY:
            return{
                ...state,       // sreading remaining state
                show: !state.show
            }
        case HIDE:
            return{
                ...state,       // sreading remaining state
                show: !state.show
            }
        default:
            return state
    }
}