import "./Auth.scss";
import RegisterImage from "./register.jpg";

function Register() {
	return (
		<div className="auth-container">
			<div className="auth-container__content">
				<div className="content">
					<h1 className="heading">Divinex</h1>
					<p>Register for Divine Experience</p>
					<form>
						<div class="form-g">
							<label for="username">Username:</label>
							<input type="text" id="username" />
						</div>
						<div class="form-g">
							<label for="email">Email:</label>
							<input type="email" id="email" />
						</div>
						<div class="form-g">
							<label for="password">Password:</label>
							<input type="password" id="password" />
						</div>
						<div class="form-g">
							<label for="confirmPassword">
								Confirm Password:
							</label>
							<input type="password" id="confirmPassword" />
						</div>
						<button type="submit" class="button">
							Register
						</button>
					</form>
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
