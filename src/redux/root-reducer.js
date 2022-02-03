import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"], //passing the reducer we want to persist
}; //user is handled by auth so we dont need to persist with reducer

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer); //returning a modified version of the root reducer w/ the persistconf
