/*
 * This functions is used to return the values of an object as an array (like Object.values()).
 * However this function is designed to work with flow type checking by preserving the object's
 * value types.
 * @flow
 */

export default function getValues<T>(obj: {[string]: T}): Array<T> {
  const keys: string[] = Object.keys(obj);
  return keys.map((key: string) => obj[key]);
}
