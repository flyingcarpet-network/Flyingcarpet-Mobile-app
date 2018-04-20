/*
 * This function is used to parse the data returned from scanning a drone or FC QR code. The first
 * argument to the function is the raw QR code data. The second argument can ether be "drone" or
 * "flyingcarpet" depending on what the QR code is for. The QR data should be encoded in the follow
 * format:
 *   For FC: "FLYINGCARPET:t:some-non-fungible-token;a:0xb2A4d35E4331031391e6CaB94bB5C852f605e4eD"
 *   For Drone: "DRONE:t:some-non-fungible-token;a:0xb2A4d35E4331031391e6CaB94bB5C852f605e4eD"
 * @flow
 */

import { isAddress } from './ethereum-address';

export default function parseQRCodeData(string: string, droneOrFC: string): { token?: string,
                                                                              address?: string } {
  // First we check that there are two substrings split with a semicolon
  const semiColonSubstrings: Array<string> = string.trim().split(';');
  if (semiColonSubstrings.length !== 2) {
    return {};
  }

  // Next we check that on the left side of the semicolon there is the correct data
  const leftSideColonSubstrings: Array<string> = semiColonSubstrings[0].split(':');
  if (leftSideColonSubstrings.length !== 3) {
    return {};
  }
  if (leftSideColonSubstrings[0].toLowerCase() !== droneOrFC.toLowerCase()) {
    return {};
  }
  if (leftSideColonSubstrings[1].toLowerCase() !== 't') {
    return {};
  }
  // NEED: We need to add a check to make sure the token is the right format (once we finalize what
  // that is...)
  const token = leftSideColonSubstrings[2];

  // Lastly we check that on the right side of the semicolon there is the correct data
  const rightSideColonSubstrings = semiColonSubstrings[1].split(':');
  if (rightSideColonSubstrings.length !== 2) {
    return {};
  }
  if (rightSideColonSubstrings[0].toLowerCase() !== 'a') {
    return {};
  }
  if (!isAddress(rightSideColonSubstrings[1])) {
    return {};
  }
  const address = rightSideColonSubstrings[1];

  return { token, address };
}
