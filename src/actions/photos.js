import {FETCH_PHOTOS_SUCCEED, FETCH_PHOTOS_FAILED, API_URL, CLIENT_ID, PER_PAGE} from '../constants';

export const fetchPhotos = () => {
    return async dispatch => {
        try {
            let response = await fetch(API_URL + 'photos/?client_id=' + CLIENT_ID + '&per_page=' + PER_PAGE, {
                method: 'GET'
            });
            response = await response.json();
            await dispatch(successHandler(response));
            return response;
        } catch (error) {
            return dispatch(errorHandler(error))
        }
    };

    function successHandler(response) {
        return {
            type: FETCH_PHOTOS_SUCCEED,
            payload: response
        }

    }
    function errorHandler(response) {
        return {
            type: FETCH_PHOTOS_FAILED,
            payload: response
        }
    }
};