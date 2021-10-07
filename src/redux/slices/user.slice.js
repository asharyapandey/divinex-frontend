import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		token: localStorage.getItem("token") || "",
		user: JSON.parse(localStorage.getItem("user")) || {},
	},
	reducers: {
		setUser: (state, { payload }) => {
			localStorage.setItem("token", payload.token);
			localStorage.setItem("user", JSON.stringify(payload.user));
			return { ...state, token: payload.token, user: payload.user };
		},
		removeToken: (state, action) => {
			localStorage.removeItem("token");
			localStorage.removeItem("user");
			return { ...state, token: "", user: {} };
		},
		updateUser: (state, { payload }) => {
			localStorage.setItem("user", JSON.stringify(payload));
			return { ...state, user: payload };
		},
	},
});

export const { setUser, removeToken, updateUser } = userSlice.actions;

export default userSlice.reducer;
