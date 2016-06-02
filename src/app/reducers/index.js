import { combineReducers } from 'redux';
import { postsByReddit, selectedReddit } from './redditReducers';

const rootReducer = combineReducers({
  postsByReddit,
  selectedReddit
});

export default rootReducer;
