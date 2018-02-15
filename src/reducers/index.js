/*
 * Here we combine the reducers.
 */

import { combineReducers } from 'redux';
import routes from './routes';
import appInfo from './appInfo';
import business from './business';

export default combineReducers({
  routes,
  appInfo,
  business
});
