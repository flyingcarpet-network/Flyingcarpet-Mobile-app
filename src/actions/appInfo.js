/*
 * This action file is for dispatching actions to the general app information reducer
 * @flow
 */

import * as types from './appInfo-types';

export function setIsLoadingComplete(isLoadingComplete: boolean): {
  type: string,
  isLoadingComplete: boolean
} {
  return {
    type: types.SET_IS_LOADING_COMPLETE,
    isLoadingComplete,
  };
}

export function setHaveCameraPermission(haveCameraPermission: boolean): {
  type: string,
  haveCameraPermission: boolean
} {
  return {
    type: types.SET_HAVE_CAMERA_PERMISSION,
    haveCameraPermission,
  };
}
