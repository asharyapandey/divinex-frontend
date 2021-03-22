import { useContext, useState } from "react";
import "./Auth.scss";
import LoginImage from "./login.jpg";
import { Link, useHistory } from "react-router-dom";
import { publicFetch } from "../utils/fetch";
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [usernameError, setUsernameError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const { setUser } = useContext(UserContext);

	const history = useHistory();
	const validate = () => {
		if (username === "") {
			setUsernameError("Username is Required");
			return false;
		} else {
			setUsernameError("");
		}
		if (password === "") {
			setPasswordError("Password is Required");
			return false;
		} else {
			setPasswordError("");
		}
		return true;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validate()) {
			const data = { username, password };
			try {
				const response = await publicFetch.post(
					"/api/user/login",
					data
				);
				console.log(response);
				setUser(response.data.token, response.data.user);
				toast.success("Login Successful", {
					position: "top-center",
				});
				// go to login
				history.replace("/");
			} catch (error) {
				console.log(error.response);
				toast.error(error.response.data.error, {
					position: "top-center",
				});
			}
		}
	};
	return (
		<div className="auth-container">
			<div className="auth-container__content">
				<div className="content">
					<h1 className="heading">DivineX</h1>
					<p>Login for Divine Experience</p>
					<form onSubmit={handleSubmit}>
						<div className="form-g">
							<label htmlFor="username">Username:</label>
							<input
								type="text"
								id="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
							<span className="error">{usernameError}</span>
						</div>
						<div className="form-g">
							<label htmlFor="password">Password:</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<span className="error">{passwordError}</span>
						</div>
						<button type="submit" className="button">
							Login
						</button>
					</form>
					<p>
						Click <Link to="/register">Here</Link> to register
					</p>
				</div>
			</div>
			<div
				className="auth-container__image"
				style={{ backgroundImage: `url(${LoginImage})` }}
			></div>
		</div>
	);
}

export default Login;
