/*
 * This reducer is for general app information
 */

import * as types from '../actions/droneOwner-types';

const initialState = {
  droneAttached: false, // True if a drone is already attached to the app, false otherwise
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_DRONE_ATTACHED:
      return {
        ...state,
        droneAttached: action.droneAttached
      };
    default:
      return state;
  }
}
