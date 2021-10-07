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
import Explore from "./pages/Explore";
import { useSelector } from "react-redux";

// for toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfilePage from "./pages/ProfilePage";
import Notification from "./pages/Notification";
import PostDetails from "./pages/PostDetails";
import EditProfilePage from "./pages/EditProfilePage";

const App = () => {
	const userState = useSelector((state) => state.user);
	return (
		<Router>
			{userState.token !== "" ? <PrivateRoutes /> : <PublicRoutes />}
			<ToastContainer position="top-center" />
		</Router>
	);
};

const PublicRoutes = () => {
	return (
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route path="*" exact>
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
					<Route
						exact
						path="/profile/:userID"
						component={ProfilePage}
					/>
					<Route
						exact
						path="/editprofile/:userID"
						component={EditProfilePage}
					/>
					<Route exact path="/post/:postID" component={PostDetails} />
					<Route
						exact
						path="/notification"
						component={Notification}
					/>
					<Route path="*">
						<h1>404: Page not found</h1>
					</Route>
				</Switch>
			</div>
		</>
	);
};

export default App;
