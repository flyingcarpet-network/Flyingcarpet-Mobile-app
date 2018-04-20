/*
 * Here we combine the reducers.
 * @flow
 */

import { combineReducers } from 'redux';
import routes from './routes';
import appInfo from './appInfo';
import business from './business';
import droneOwner from './droneOwner';
import flyingCarpetOwner from './flyingCarpetOwner';

export default combineReducers({
  routes,
  appInfo,
  business,
  droneOwner,
  flyingCarpetOwner,
});
