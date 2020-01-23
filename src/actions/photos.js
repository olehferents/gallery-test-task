import {FETCH_PHOTOS_SUCCEED, FETCH_PHOTOS_FAILED, API_URL, CLIENT_ID} from '../constants';

export const fetchPhotos = (page) => {
    return async dispatch => {
        try {
            let response =
                await fetch(API_URL + 'photos/?client_id=' + CLIENT_ID + '&page=' + page + '&order_by=latest',
                    {
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