import CardList from "../components/PhotoCard/CardList";
import UserList from "../components/UserList";
import "./Home.scss";

const Home = () => {
	return (
		<div className="Home">
			<CardList />
			<UserList />
		</div>
	);
};

export default Home;
