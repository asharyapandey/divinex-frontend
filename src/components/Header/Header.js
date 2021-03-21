import Icon from "./Icon";
import "./Header.scss";
import Search from "./Search";

const Header = () => {
	return (
		<div className="container">
			<header className="header">
				<div className="header__logo">DivineX</div>

				<div className="header__search">
					<Search />
				</div>
				<div className="nav header__nav">
					<Icon
						path="/"
						image="/images/home.png"
						altText="Home Icon"
					/>
					<Icon
						path="/explore"
						image="/images/direction.png"
						altText="Direction Icon"
					/>
					<Icon
						path="/notification"
						image="/images/heart.png"
						altText="Heart Icon"
					/>
					<Icon
						path="/profile"
						image="/images/user.png"
						altText="User Icon"
					/>
					<Icon
						path="/profile"
						image="/images/user.png"
						altText="User Icon"
					/>
				</div>
			</header>
		</div>
	);
};

export default Header;
