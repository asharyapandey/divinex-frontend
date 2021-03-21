import { Link, useLocation } from "react-router-dom";
import "./Icon.scss";

const Icon = ({ path, image, altText }) => {
	const location = useLocation();
	const pathName = location.pathname;
	const classes = path === pathName ? "Icon icon-active" : "Icon";
	return (
		<div className={classes}>
			<Link to={path}>
				<img src={image} alt={altText} className="Icon__image" />
			</Link>
		</div>
	);
};

export default Icon;
