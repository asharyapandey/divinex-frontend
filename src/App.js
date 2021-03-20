import Header from "./components/Header/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";

function App() {
	return (
		<Router>
			<Switch>
				<ToastProvider
					autoDismiss="true"
					autoDismissTimeout="5000"
					placement="top-center"
				>
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/" component={Header} />
				</ToastProvider>
			</Switch>
		</Router>
	);
}

const publicRoutes = () => {
	return (
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
		</Switch>
	);
};

const privateRoutes = () => {
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
