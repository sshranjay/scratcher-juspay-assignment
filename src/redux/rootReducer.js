import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import catReducer from './catReducer';

export const rootReducer = combineReducers({
  tasksList: taskReducer,
  catDetails: catReducer,
});
