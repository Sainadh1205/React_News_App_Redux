import { FETCHNEWS_REQUEST, FETCHNEWS_SUCCESS, FETCHNEWS_FAILURE } from "./action";

export const newsList = {
    loading: false,
    newsList: [],
    errorMsg: ""
}

export const newsReducer = (state = newsList, action) => {
    switch (action.type) {
        case FETCHNEWS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCHNEWS_SUCCESS:
            return {
                ...state,
                newsList: action.payload
            }
        case FETCHNEWS_FAILURE:
            return {
                ...state,
                errorMsg: action.payload
            }

        default:
            return state
    }
}