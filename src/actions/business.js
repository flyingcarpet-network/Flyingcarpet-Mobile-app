/*
 * This action file is for dispatching actions to the general app information reducer
 */

import * as types from './business-types';

export function reset() {
  return {
    type: types.RESET
  };
}

export function setBusinessType(businessType) {
  return {
    type: types.SET_BUSINESS_TYPE,
    businessType
  };
}

export function addLocationCoordinate(locationCoordinate) {
  return {
    type: types.ADD_LOCATION_COORDINATE,
    locationCoordinate
  };
}

export function setAltitute(altitute) {
  return {
    type: types.SET_ALTITUTE,
    altitute
  };
}

export function setFlightDirection(flightDirection) {
  return {
    type: types.SET_FLIGHT_DIRECTION,
    flightDirection
  };
}

export function toggleOption(option) {
  return {
    type: types.TOGGLE_OPTION,
    option
  };
}
