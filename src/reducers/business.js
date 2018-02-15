/*
 * This reducer is for general app information
 */

import * as types from '../actions/business-types';

const initialState = {
  businessType: '', // Represents the name of the type of the selected business (e.g. infrastructure, agriculture, etc.)
  selectedLocationCoordinates: [], // An array of coordinates (lat/long pairs) representing the user's selected region on the map
  altitute: 0, // Represents the altitute for the selected business service (only used by some business services)
  flightDirection: 0, // Represents the flight direction for the selected business service (only used by some business services)
  selectedOptions: {} // Contains all of the *selected* checkbox options (with the value "true") for the selected business
                      // service (the options vary depending on the selected business). NOTE: this object may contain other
                      // values without the value "true."
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.RESET:
      return {
        ...initialState
      };
    case types.SET_BUSINESS_TYPE:
      return {
        ...state,
        businessType: action.businessType
      };
    case types.ADD_LOCATION_COORDINATE:
      return {
        ...state,
        selectedLocationCoordinates: [
          ...(state.selectedLocationCoordinates),
          action.locationCoordinate
        ]
      };
    case types.SET_ALTITUTE:
      return {
        ...state,
        altitute: action.altitute
      };
    case types.SET_FLIGHT_DIRECTION:
      return {
        ...state,
        flightDirection: action.flightDirection
      };
    case types.TOGGLE_OPTION:
      console.log(state.selectedOptions[action.option]);
      return {
        ...state,
        selectedOptions: {
          ...(state.selectedOptions),
          [action.option]: ((action.option in state.selectedOptions) ?
            !(state.selectedOptions[action.option]) // Toggle the boolean value of the option
            :
            true // Set the value of the option to true since no value is currently set in the selectedOptions object
          )
        }
      };
    default:
      return state;
  }
}
