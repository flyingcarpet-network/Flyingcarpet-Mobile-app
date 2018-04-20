/*
 * This action file is for dispatching actions to the general app information reducer
 * @flow
 */

import * as types from './business-types';

export function reset(): {type: string} {
  return {
    type: types.RESET,
  };
}

export function setBusinessType(businessType: string): {type: string, businessType: string} {
  return {
    type: types.SET_BUSINESS_TYPE,
    businessType,
  };
}

export function addLocationCoordinate(uniqueIdentifier: string, locationCoordinate: string): {
  type: string,
  uniqueIdentifier: string,
  locationCoordinate: string
} {
  return {
    type: types.ADD_LOCATION_COORDINATE,
    uniqueIdentifier,
    locationCoordinate,
  };
}

export function removeLocationCoordinate(uniqueIdentifier: string): {
  type: string,
  uniqueIdentifier: string
} {
  return {
    type: types.REMOVE_LOCATION_COORDINATE,
    uniqueIdentifier,
  };
}

export function setAltitute(altitute: number): {type: string, altitute: number} {
  return {
    type: types.SET_ALTITUTE,
    altitute,
  };
}

export function setFlightDirection(flightDirection: number): {
  type: string,
  flightDirection: number
} {
  return {
    type: types.SET_FLIGHT_DIRECTION,
    flightDirection,
  };
}

export function toggleOption(option: string): {type: string, option: string} {
  return {
    type: types.TOGGLE_OPTION,
    option,
  };
}

export function setEthCost(ethCost: number): {type: string, ethCost: number} {
  return {
    type: types.SET_ETH_COST,
    ethCost,
  };
}

export function setBusinessTransactionProcessing(businessTransactionProcessing: boolean): {
  type: string,
  businessTransactionProcessing: boolean
} {
  return {
    type: types.SET_BUSINESS_TRANSACTION_PROCESSING,
    businessTransactionProcessing,
  };
}

export function toggleMapOpen(): {type: string} {
  return {
    type: types.TOGGLE_MAP_OPEN,
  };
}
