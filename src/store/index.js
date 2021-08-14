import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducer from './renducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))
// const store = createStore(reducer,applyMiddleware(thunk))

export default store