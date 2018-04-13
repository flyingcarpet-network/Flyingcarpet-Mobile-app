/*
 * This action file is for dispatching actions to the general app information reducer
 * @flow
 */

import * as types from './droneOwner-types';

export function setNewDroneAttached(newDroneAttached: boolean): {type: string, newDroneAttached: boolean} {
  return {
    type: types.SET_NEW_DRONE_ATTACHED,
    newDroneAttached
  };
}

export function setDroneToken(droneToken: string): {type: string, droneToken: string} {
  return {
    type: types.SET_DRONE_TOKEN,
    droneToken
  };
}

export function setDroneAddress(droneAddress: string): {type: string, droneAddress: string} {
  return {
    type: types.SET_DRONE_ADDRESS,
    droneAddress
  };
}
