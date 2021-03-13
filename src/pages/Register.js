import { useState } from "react";
import "./Register.scss";
import RegisterImage from "./register.jpg";
import { Link } from "react-router-dom";

function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("Male");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="auth-container">
			<div className="auth-container__content">
				<div className="content">
					<h1 className="heading">DivineX</h1>
					<p>Register for Divine Experience</p>
					<form>
						<div className="form-g">
							<label for="username">Username:</label>
							<input
								type="text"
								id="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div className="form-g">
							<label for="email">Email:</label>
							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-g">
							<label htmlFor="gender">Gender</label>
							<select
								name="gender"
								id="gender"
								onChange={(e) => setGender(e.target.value)}
							>
								<option value="Male">Male</option>
								<option value="Female">Female</option>

								<option value="Others">Others</option>
							</select>
						</div>
						<div className="form-g">
							<label for="password">Password:</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="form-g">
							<label for="confirmPassword">
								Confirm Password:
							</label>
							<input
								type="password"
								id="confirmPassword"
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
							/>
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
