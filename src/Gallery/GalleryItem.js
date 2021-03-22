import "./GalleryItem.scss";

function GalleryItem({ span }) {
	const classes = span ? "GalleryItem item_wide" : "GalleryItem";
	return (
		<div className={classes}>
			<div className="GalleryItem__image">
				<img src="/images/posts/mock_img.jpg" alt="" />
			</div>
			<div className="GalleryItem__info">
				<ul>
					<li className="GalleryItem__info--likes">😍 200</li>
					<li className="GalleryItem__info--comments">✍ 200</li>
				</ul>
			</div>
		</div>
	);
}

export default GalleryItem;
