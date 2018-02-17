/*
 * This action file is for dispatching actions to the general app information reducer
 */

import * as types from './droneOwner-types';

export function setNewDroneAttached(newDroneAttached) {
  return {
    type: types.SET_NEW_DRONE_ATTACHED,
    newDroneAttached
  };
}

export function setDroneToken(droneToken) {
  return {
    type: types.SET_DRONE_TOKEN,
    droneToken
  };
}

export function setDroneAddress(droneAddress) {
  return {
    type: types.SET_DRONE_ADDRESS,
    droneAddress
  };
}
