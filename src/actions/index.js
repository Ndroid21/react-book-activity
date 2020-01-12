import jsonplaceholder from '../apis/jsonplaceholder';
import { FETCH_ACTIVITIES, FETCH_ACTIVITY_SLOTS } from './types';

export const fetch_activities = () => async dispatch => {
    const response = await jsonplaceholder.get('/albums');

    dispatch({ type: FETCH_ACTIVITIES, payload: response.data });
}

export const fetch_activity_slots = id => async dispatch => {
    const response = await jsonplaceholder.get(`/photos?albumId=${id}`);

    dispatch({ type: FETCH_ACTIVITY_SLOTS, payload: response.data });
}