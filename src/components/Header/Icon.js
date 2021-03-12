import "./Icon.scss";

const Icon = ({ image, altText }) => {
	return (
		<div className="Icon">
			<img src={image} alt={altText} className="Icon__image" />
		</div>
	);
};

export default Icon;
