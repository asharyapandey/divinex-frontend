import { configureStore, combineReducers } from "@reduxjs/toolkit";
import snackbarSlice from "./slices/snackbar.slice";
import userSlice from "./slices/user.slice";

const reducer = combineReducers({
	user: userSlice,
	snackbar: snackbarSlice,
});

const store = configureStore({
	reducer,
});

export default store;
