/*
 * This action file is for dispatching actions to the general app information reducer
 */

import * as types from './appInfo-types';

export function setIsLoadingComplete(isLoadingComplete) {
  return {
    type: types.SET_IS_LOADING_COMPLETE,
    isLoadingComplete
  };
}

export function setHaveCameraPermission(haveCameraPermission) {
  return {
    type: types.SET_HAVE_CAMERA_PERMISSION,
    haveCameraPermission
  };
}
