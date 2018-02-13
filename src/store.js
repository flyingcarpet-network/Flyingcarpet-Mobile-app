import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

// Redux middleware
const middleware = [/* ...middleware (i.e. thunk) */];

// Compose with devTools if in development, otherwise use standard redux compose
const composeWithDevToolsIfDev = (composeWithDevTools ? composeWithDevTools : compose);

// Create store
const store = composeWithDevToolsIfDev({/* Options... */})(
  applyMiddleware(...middleware)
)(createStore)(reducers);

export default store;
