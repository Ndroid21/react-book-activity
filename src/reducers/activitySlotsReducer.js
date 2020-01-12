import { FETCH_ACTIVITY_SLOTS } from '../actions/types';

export default (state = null, action) => {
    switch(action.type){
        case FETCH_ACTIVITY_SLOTS:
            return action.payload;
        default:
            return state;
    }
}