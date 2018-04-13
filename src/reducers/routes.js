/*
 * This is a special reducer used for capturing actions from the router and saving them in redux
 * @flow
 */

import { ActionConst } from 'react-native-router-flux';

type StateTypes = {
  routeName: string // Represents the current route's name (the default route is "home")
};

const initialState: StateTypes = {
  routeName: 'home'
};

export default function reducer(state: StateTypes = initialState, action: {[string]: mixed} = {}): {} {
  switch (action.type) {
    // The focus action is dispatched when a new screen comes into focus
    case ActionConst.FOCUS: // This is a special constant value set by react-native-router-flux
      return {
        ...state,
        routeName: action.routeName,
      };
    default:
      return state;
  }
}
