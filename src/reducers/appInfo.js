/*
 * This reducer is for general app information
 */

import * as types from '../actions/appInfo-types';

const initialState = {
  isLoadingComplete: false, // Represents whether the app has loaded in yet
  haveCameraPermission: false // Represents whether the app has been granted the camera permission
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_IS_LOADING_COMPLETE:
      return {
        ...state,
        isLoadingComplete: action.isLoadingComplete
      };
    case types.SET_HAVE_CAMERA_PERMISSION:
      return {
        ...state,
        haveCameraPermission: action.haveCameraPermission
      };
    default:
      return state;
  }
}
