import Axios from "axios";

const BASE_URL = "http://localhost:5000";

export const publicFetch = Axios.create({
	baseURL: BASE_URL,
});
export const privateFetch = Axios.create({
	headers: {
		"auth-token": localStorage.getItem("token"),
	},
});

export const getPrivateFetch = (token) => {
	return Axios.create({
		baseURL: BASE_URL,
		headers: {
			"auth-token": token,
		},
	});
};
