/*
 * This reducer is for the flyingcarpet owner dialog
 * @flow
 */

import * as types from '../actions/flyingCarpetOwner-types';
import { type ChannelType, type MapCoordinateCircleType } from '../types';

type StateTypes = {
  newFlyingCarpetAttached: boolean, // True if a flyingcarpet was just attached in the attach
                                    // dialog (only True if the user hasn't left the dialog
                                    // yet), false otherwise.
                                    // NOTE: this field is used to prevent the camera QR code
                                    //       reader from firing multiple times for a
                                    //       successful scan.
  flyingCarpetToken: string, // This is the flyingcarpet's token that is scanned from the QR code
  flyingCarpetAddress: string, // This is the flyingcarpet's smart contract address that is scanned
                               // from the QR code
  // The following field is an array of location circle objects (lat, long, and radius) that
  // represent the most ideal nearby locations for Flying Carpets.
  // NOTE: radius is measured in metres
  flyingCarpetBestLocations: Array<MapCoordinateCircleType>,
  channelData: ?ChannelType // This represents the channel data of the currently selected channel
};

const initialState: StateTypes = {
  newFlyingCarpetAttached: false,
  flyingCarpetToken: '',
  flyingCarpetAddress: '',
  // NOTE: The following field is hard-coded for now, however in the future it needs to be
  // dynamically loaded from a smart contract (and added to redux with an action)
  flyingCarpetBestLocations: [
    {
      latitude: 37.78555, longitude: -122.4054, radius: 1500, label: '396%',
    },
    {
      latitude: 37.78981, longitude: -122.4509, radius: 3000, label: '170%',
    },
  ],
  channelData: null,
};

export default function reducer(
  state: StateTypes = initialState,
  action: {[string]: mixed} = {},
): {} {
  switch (action.type) {
    case types.SET_NEW_FLYING_CARPET_ATTACHED:
      return {
        ...state,
        newFlyingCarpetAttached: action.newFlyingCarpetAttached,
      };
    case types.SET_FLYING_CARPET_TOKEN:
      return {
        ...state,
        flyingCarpetToken: action.flyingCarpetToken,
      };
    case types.SET_FLYING_CARPET_ADDRESS:
      return {
        ...state,
        flyingCarpetAddress: action.flyingCarpetAddress,
      };
    case types.SET_CHANNEL_DATA:
      return {
        ...state,
        channelData: action.channelData,
      };
    default:
      return state;
  }
}
