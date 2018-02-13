/*
 * This is a special reducer used for capturing actions from the router and saving them in redux
 */

const initialState = {
  routeName: 'home' // Represents the current route's name (the default route is "home")
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // The focus action is dispatched when a new screen comes into focus
    case "REACT_NATIVE_ROUTER_FLUX_FOCUS":
      return {
        ...state,
        routeName: action.routeName,
      };
    default:
      return state;
  }
}
