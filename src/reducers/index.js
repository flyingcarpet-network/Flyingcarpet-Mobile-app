/*
 * Here we combine the reducers.
 */

import { combineReducers } from 'redux';
import routes from './routes';
import appInfo from './appInfo';

export default combineReducers({
  routes,
  appInfo
});
