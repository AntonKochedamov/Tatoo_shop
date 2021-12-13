import {combineReducers, createStore} from "redux";
import homeReducer from "./home-reducer";

let reduces = combineReducers({
    homePages: homeReducer
})

let store = createStore(reduces)

export default store