/*
 * This action file is for dispatching actions to the general app information reducer
 */

import * as types from './droneOwner-types';

export function setDroneAttached(droneAttached) {
  return {
    type: types.SET_DRONE_ATTACHED,
    droneAttached
  };
}
