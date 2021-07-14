import { applyMiddleware, createStore } from "redux"
import ReduxTrunk from 'redux-thunk'
import rootReducer from './'

export const middlewares = [ReduxTrunk]

export const configureStore = createStore(rootReducer, {}, applyMiddleware(...middlewares))
