/*
 * This reducer is for general app information
 * @flow
 */

import * as types from '../actions/appInfo-types';

type StateTypes = {
  isLoadingComplete: boolean, // Represents whether the app has loaded in yet
  haveCameraPermission: boolean // Represents whether the app has been granted the camera permission
};

const initialState: StateTypes = {
  isLoadingComplete: false,
  haveCameraPermission: false,
};

export default function reducer(
  state: StateTypes = initialState,
  action: {[string]: mixed} = {},
): {} {
  switch (action.type) {
    case types.SET_IS_LOADING_COMPLETE:
      return {
        ...state,
        isLoadingComplete: action.isLoadingComplete,
      };
    case types.SET_HAVE_CAMERA_PERMISSION:
      return {
        ...state,
        haveCameraPermission: action.haveCameraPermission,
      };
    default:
      return state;
  }
}
