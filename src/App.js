import Header from "./components/Header/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";

import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";

const App = () => {
	const { isAuth } = useContext(UserContext);
	return (
		<Router>
			<ToastProvider
				autoDismiss="true"
				autoDismissTimeout="5000"
				placement="top-center"
			>
				{console.log(isAuth())}
				{isAuth() ? <PrivateRoutes /> : <PublicRoutes />}
			</ToastProvider>
		</Router>
	);
};

const PublicRoutes = () => {
	return (
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route path="/" exact>
				<Redirect to="/register" />
			</Route>
		</Switch>
	);
};

const PrivateRoutes = () => {
	return (
		<Switch>
			<Header />
			<Route exact path="/" component={Home} />
			<Route exact path="/explore" component={Explore} />
			<Route exact path="/profile" component={Profile} />
		</Switch>
	);
};

export default App;
