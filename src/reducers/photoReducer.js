import {FETCH_PHOTOS_FAILED, FETCH_PHOTOS_SUCCEED} from "../constants";

const initialState = {
    photos: [],
    error: ''
};

export const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PHOTOS_SUCCEED:
            return {
                ...state,
                photos: action.payload
            };
        case FETCH_PHOTOS_FAILED:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};