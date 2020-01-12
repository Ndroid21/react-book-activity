import { combineReducers } from 'redux';
import activitiesReducer from './activitiesReducer';
import activitySlotsReducer from './activitySlotsReducer';

export default combineReducers({
  activities: activitiesReducer,
  slots: activitySlotsReducer,
});