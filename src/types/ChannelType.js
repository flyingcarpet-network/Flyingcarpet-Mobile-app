/*
 * This type is used to denote an object of data corresponding to a state channel relationship.
 * @flow
 */

export type ChannelType = {
  name: string,
  partnerAddress: string,
  channelAddress: string,
  balance: number,
  state: string,
  revealTime: number,
  settleTime: number
};
