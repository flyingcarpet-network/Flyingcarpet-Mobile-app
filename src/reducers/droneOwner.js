/*
 * This reducer is for the drone owner dialog
 */

import * as types from '../actions/droneOwner-types';

const initialState = {
  newDroneAttached: false, // True if a drone was just attached in the attach dialog (only True
                           // if the user hasn't left the dialog yet), false otherwise.
                           // NOTE: this field is used to prevent the camera QR code reader from
                           //       firing multiple times for a successful scan.
  droneToken: '', // This is the drone's token that is scanned from the QR code
  droneAddress: '' // This is the drone's smart contract address that is scanned from the QR code
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_NEW_DRONE_ATTACHED:
      return {
        ...state,
        newDroneAttached: action.newDroneAttached
      };
    case types.SET_DRONE_TOKEN:
      return {
        ...state,
        droneToken: action.droneToken
      };
    case types.SET_DRONE_ADDRESS:
      return {
        ...state,
        droneAddress: action.droneAddress
      };
    default:
      return state;
  }
}
