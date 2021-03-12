import { useState } from "react";
import "./Auth.scss";
import LoginImage from "./login.jpg";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div className="auth-container">
			<div className="auth-container__content">
				<div className="content">
					<h1 className="heading">Divinex</h1>
					<p>Login for Divine Experience</p>
					<form>
						<div class="form-g">
							<label for="username">Username:</label>
							<input
								type="text"
								id="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div class="form-g">
							<label for="password">Password:</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<button type="submit" class="button">
							Login
						</button>
					</form>
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
