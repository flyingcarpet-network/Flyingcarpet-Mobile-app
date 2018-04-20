/*
 * This reducer is for general app information
 * @flow
 */

import * as types from '../actions/business-types';
import { type MapCoordinateType } from '../types/MapCoordinateType';

type StateTypes = {
  businessType: string, /* Represents the name of the type of the selected business (e.g.
                           infrastructure, agriculture, etc.) */
  selectedLocationCoordinates: {[string]: MapCoordinateType}, /* An object of keys (unqiue strings)
                                                                 and coordinate values (lat/long
                                                                 pair objects) representing the
                                                                 user's selected region on the
                                                                 map */
  altitute: number, /* Represents the altitute for the selected business service (only used by some
                       business services) */
  flightDirection: number, /* Represents the flight direction for the selected business service
                              (only used by some business services) */
  selectedOptions: {[string]: mixed}, /* Contains all of the *selected* checkbox options (with the
                                         value "true") for the selected business
                                         service (the options vary depending on the selected
                                         business). NOTE: this object may contain other values
                                         without the value "true." */
  ethCost: number, /* Represents the amount the user willing to spend to run the business service
                      (used to also calculate the time required to complete the task) */
  businessTransactionProcessing: boolean, /* Represents whether the transaction has started being
                                             process (a vehicle has been found to complete the
                                             task) */
  mapOpen: boolean /* Represents whether the map is open on ether the BusinessDetails or
                      BusinessEstimate dialogs */
};

const initialState: StateTypes = {
  businessType: '',
  selectedLocationCoordinates: {},
  altitute: 0,
  flightDirection: 0,
  selectedOptions: {},
  ethCost: 0,
  businessTransactionProcessing: false,
  mapOpen: false,
};

export default function reducer(
  state: StateTypes = initialState,
  action: {[string]: mixed} = {},
): {} {
  switch (action.type) {
    case types.RESET:
      return {
        ...initialState,
      };
    case types.SET_BUSINESS_TYPE:
      return {
        ...state,
        businessType: action.businessType,
      };
    case types.ADD_LOCATION_COORDINATE:
      return {
        ...state,
        selectedLocationCoordinates: {
          ...(state.selectedLocationCoordinates),
          [String(action.uniqueIdentifier)]: action.locationCoordinate, /* The key is a unique
                                                                           string represeting the
                                                                           location of this
                                                                           particular marker */
        },
      };
    case types.REMOVE_LOCATION_COORDINATE: {
      // Create a new object (otherKeys) that doesn't contain the deleted key/value pair
      const {
        [String(action.uniqueIdentifier)]: _,
        ...otherKeys
      } = state.selectedLocationCoordinates;
      return {
        ...state,
        selectedLocationCoordinates: otherKeys,
      };
    }
    case types.SET_ALTITUTE:
      return {
        ...state,
        altitute: action.altitute,
      };
    case types.SET_FLIGHT_DIRECTION:
      return {
        ...state,
        flightDirection: action.flightDirection,
      };
    case types.TOGGLE_OPTION:
      return {
        ...state,
        selectedOptions: {
          ...(state.selectedOptions),
          [String(action.option)]: ((String(action.option) in state.selectedOptions) ?
            !(state.selectedOptions[String(action.option)]) /* Toggle the boolean value of the
                                                               option */
            :
            true /* Set the value of the option to true since no value is currently set in the
                    selectedOptions object */
          ),
        },
      };
    case types.SET_ETH_COST:
      return {
        ...state,
        ethCost: action.ethCost,
      };
    case types.SET_BUSINESS_TRANSACTION_PROCESSING:
      return {
        ...state,
        businessTransactionProcessing: action.businessTransactionProcessing,
      };
    case types.TOGGLE_MAP_OPEN:
      return {
        ...state,
        mapOpen: !(state.mapOpen),
      };
    default:
      return state;
  }
}
