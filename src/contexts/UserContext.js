import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [userInfo, setUserInfo] = useState(
		JSON.parse(localStorage.getItem("userInfo"))
	);
	useEffect(() => {
		setToken(localStorage.getItem("token"));
		setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
	}, []);

	const isAuth = () => token != null;

	const setUser = (token1, userInfo1) => {
		localStorage.setItem("token", token1);
		localStorage.setItem("userInfo", JSON.stringify(userInfo1));

		setToken(token1);
		setUserInfo(userInfo1);
	};

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userInfo");

		setToken(null);
		setUserInfo({});
	};

	return (
		<UserContext.Provider
			value={{ token, setUser, logout, userInfo, isAuth }}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
