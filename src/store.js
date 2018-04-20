/*
 * @flow
 */

// We have to disable eslint for the next line, since composeWithDevTools is only used when
// running in dev (but eslint doesn't realize this):
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

// Redux middleware
const middleware: Array<() => {}> = [/* ...middleware (i.e. thunk) */];

// Compose with devTools if in development, otherwise use standard redux compose
const composeWithDevToolsIfDev = (composeWithDevTools || compose);

// Create store
// NOTE: Configuration options can be added as composeWithDevToolsIfDev arguments
const store = composeWithDevToolsIfDev({})(applyMiddleware(...middleware))(createStore)(reducers);

export default store;
