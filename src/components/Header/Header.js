import Icon from "./Icon";
import "./Header.scss";
import Search from "./Search";
import { useEffect, useState } from "react";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);

	const handleScroll = () => {
		const offset = window.pageYOffset;
		if (offset > 0) setScrolled(true);
		else setScrolled(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll");
	}, []);

	const classes = scrolled ? "container scrolled" : "container";

	return (
		<div className={classes}>
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
