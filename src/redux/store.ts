import { createStore, combineReducers, applyMiddleware } from "redux";
import { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import cartItem from "./Reducers/cartItem";


const Reducers=combineReducers({
    cartItem:cartItem

})




const store = createStore(
    Reducers,
    composeWithDevTools(applyMiddleware())
)

export default store;