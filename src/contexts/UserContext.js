import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [userInfo, setUserInfo] = useState(() => {
		JSON.parse(localStorage.getItem("userInfo"));
	});

	const isAuth = () => token != null;

	const setUser = (token, userInfo) => {
		localStorage.setItem("token", token);
		localStorage.setItem("userInfo", JSON.stringify(userInfo));

		setToken(token);
		setUserInfo(userInfo);
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
