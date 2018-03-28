/*
 * This action file is for dispatching actions to the general app information reducer
 */

import * as types from './flyingCarpetOwner-types';

export function setNewFlyingCarpetAttached(newFlyingCarpetAttached) {
  return {
    type: types.SET_NEW_FLYING_CARPET_ATTACHED,
    newFlyingCarpetAttached
  };
}

export function setFlyingCarpetToken(flyingCarpetToken) {
  return {
    type: types.SET_FLYING_CARPET_TOKEN,
    flyingCarpetToken
  };
}

export function setFlyingCarpetAddress(flyingCarpetAddress) {
  return {
    type: types.SET_FLYING_CARPET_ADDRESS,
    flyingCarpetAddress
  };
}

export function setChannelData(channelData) {
  return {
    type: types.SET_CHANNEL_DATA,
    channelData
  };
}
