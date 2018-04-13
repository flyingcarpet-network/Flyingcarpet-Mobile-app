/*
 * This action file is for dispatching actions to the general app information reducer
 * @flow
 */

import * as types from './flyingCarpetOwner-types';
import { type Channel } from '../types/Channel';

export function setNewFlyingCarpetAttached(newFlyingCarpetAttached: boolean): {type: string, newFlyingCarpetAttached: boolean} {
  return {
    type: types.SET_NEW_FLYING_CARPET_ATTACHED,
    newFlyingCarpetAttached
  };
}

export function setFlyingCarpetToken(flyingCarpetToken: string): {type: string, flyingCarpetToken: string} {
  return {
    type: types.SET_FLYING_CARPET_TOKEN,
    flyingCarpetToken
  };
}

export function setFlyingCarpetAddress(flyingCarpetAddress: string): {type: string, flyingCarpetAddress: string} {
  return {
    type: types.SET_FLYING_CARPET_ADDRESS,
    flyingCarpetAddress
  };
}

export function setChannelData(channelData: Channel): {type: string, channelData: Channel} {
  return {
    type: types.SET_CHANNEL_DATA,
    channelData
  };
}
