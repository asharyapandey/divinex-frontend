import { useState, useEffect } from "react";
import "./Auth.scss";
import RegisterImage from "./register.jpg";

import { Link } from "react-router-dom";

const op = {
	usernameError: "",
	emailError: "",
	passwordError: "",
	confirmPasswordError: "",
};

function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("Male");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [usernameError, setUsernameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [cpError, setCpError] = useState("");
	const validate = () => {
		if (username === "") {
			setUsernameError("Username is Required");
			return false;
		} else {
			setUsernameError("");
		}
		if (email === "") {
			setEmailError("Email is Required");
			return false;
		} else {
			setEmailError("");
		}

		if (password === "") {
			setPasswordError("Password is Required");
			return false;
		} else {
			setPasswordError("");
		}

		if (confirmPassword === "") {
			setCpError("Please Confirm the password");
			return false;
		} else {
			setCpError("");
		}

		if (password !== confirmPassword) return false;

		return true;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {
			const data = { username, email, gender, password };
			console.log(data);
		}
	};
	return (
		<div className="auth-container">
			<div className="auth-container__content">
				<div className="content">
					<h1 className="heading">DivineX</h1>
					<p>Register for Divine Experience</p>
					<form onSubmit={handleSubmit} className="l-form">
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
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<span className="error">{emailError}</span>
						</div>
						<div className="form-g">
							<label htmlFor="gender">Gender:</label>
							<select
								name="gender"
								id="gender"
								value={gender}
								onChange={(e) => setGender(e.target.value)}
							>
								<option value="Male">Male</option>
								<option value="Female">Female</option>

								<option value="Others">Others</option>
							</select>
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
						<div className="form-g">
							<label htmlFor="confirmPassword">
								Confirm Password:
							</label>
							<input
								type="password"
								id="confirmPassword"
								value={confirmPassword}
								onChange={(e) => {
									setConfirmPassword(e.target.value);
									if (e.target.value !== password)
										setCpError("Passwords Don't Match");
									else setCpError("");
								}}
							/>
							<span className="error">{cpError}</span>
						</div>
						<button type="submit" className="button">
							Register
						</button>
					</form>
					<p>
						Click <Link to="/login">Here</Link> to login
					</p>
				</div>
			</div>
			<div
				className="auth-container__image"
				style={{ backgroundImage: `url(${RegisterImage})` }}
			></div>
		</div>
	);
}

export default Register;
