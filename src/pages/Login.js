import "./Login.scss";

function Login() {
	return (
		<div className="auth-container">
			<div className="auth-container__content">
				<div className="content">
					<h1 className="heading">Divinex</h1>
					<p>Login for Divine Experience</p>
					<form>
						<div class="form-g">
							<label for="username">Username:</label>
							<input type="text" id="username" />
						</div>
						<div class="form-g">
							<label for="password">Password:</label>
							<input type="password" id="password" />
						</div>
						<button type="submit" class="button">
							Login
						</button>
					</form>
				</div>
			</div>
			<div className="auth-container__image"></div>
		</div>
	);
}

export default Login;
