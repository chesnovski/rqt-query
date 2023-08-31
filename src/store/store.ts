import { composeWithDevTools } from "redux-devtools-extension";
import { legacy_createStore as createStore, combineReducers } from "redux"
import {coinReducer} from './reducer/coinReducer'

const rootReducer = combineReducers({

    coin: coinReducer,


})

export const store = createStore(rootReducer, composeWithDevTools())

export type RootState = ReturnType<typeof rootReducer>;