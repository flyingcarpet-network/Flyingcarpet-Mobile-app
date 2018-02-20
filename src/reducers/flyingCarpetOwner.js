/*
 * This reducer is for the flyingcarpet owner dialog
 */

import * as types from '../actions/flyingCarpetOwner-types';

const initialState = {
  newFlyingCarpetAttached: false, // True if a flyingcarpet was just attached in the attach dialog (only True
                           // if the user hasn't left the dialog yet), false otherwise.
                           // NOTE: this field is used to prevent the camera QR code reader from
                           //       firing multiple times for a successful scan.
  flyingCarpetToken: '', // This is the flyingcarpet's token that is scanned from the QR code
  flyingCarpetAddress: '' // This is the flyingcarpet's smart contract address that is scanned from the QR code
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_NEW_FLYING_CARPET_ATTACHED:
      return {
        ...state,
        newFlyingCarpetAttached: action.newFlyingCarpetAttached
      };
    case types.SET_FLYING_CARPET_TOKEN:
      return {
        ...state,
        flyingCarpetToken: action.flyingCarpetToken
      };
    case types.SET_FLYING_CARPET_ADDRESS:
      return {
        ...state,
        flyingCarpetAddress: action.flyingCarpetAddress
      };
    default:
      return state;
  }
}
