import { createStore } from "redux"
import rootReducer from './'

export const configureStore = createStore(rootReducer)