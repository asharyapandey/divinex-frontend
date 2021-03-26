import Icon from "./Icon";
import "./Header.scss";
import Search from "./Search";
import { useEffect, useRef, useState } from "react";
import Modal from "../Modal";
import AddPhoto from "../PhotoCard/AddPhoto";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const modal = useRef(null);

	const handleScroll = () => {
		const offset = window.pageYOffset;
		if (offset > 0) setScrolled(true);
		else setScrolled(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll, true);
	}, []);

	const openModal = () => {
		modal.current.open();
	};

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
					<div className="Icon" onClick={openModal}>
						<img
							src="/images/photo.png"
							alt="Add New"
							className="Icon__image"
						/>
					</div>
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
				</div>
			</header>
			<Modal ref={modal}>
				<AddPhoto close={modal.current.close} />
			</Modal>
		</div>
	);
};

export default Header;
