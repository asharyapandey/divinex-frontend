import Header from "./components/Header/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";

import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";

// for toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	const { isAuth } = useContext(UserContext);
	return (
		<Router>
			{isAuth() ? <PrivateRoutes /> : <PublicRoutes />}
			<ToastContainer />
		</Router>
	);
};

const PublicRoutes = () => {
	return (
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route path="/" exact>
				<Redirect to="/login" />
			</Route>
		</Switch>
	);
};

const PrivateRoutes = () => {
	return (
		<>
			<Header />
			<div className="content">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/explore" component={Explore} />
					<Route exact path="/profile" component={Profile} />
					<Route path="*">
						<h1>404: Page not found</h1>
					</Route>
				</Switch>
			</div>
		</>
	);
};

export default App;
