import Header from "./components/Header/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

function App() {
	return (
		<Router>
			<Switch>
				<ToastProvider>
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/" component={Header} />
				</ToastProvider>
			</Switch>
		</Router>
	);
}

export default App;
