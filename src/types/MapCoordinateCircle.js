/*
 * This type is used to denote an object of data corresponding to a circle for display on a map (includes a radius and label).
 * @flow
 */

export type MapCoordinateCircle = {
  latitude: number,
  longitude: number,
  radius: number,
  label: string
};
