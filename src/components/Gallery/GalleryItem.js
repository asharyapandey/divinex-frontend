import "./GalleryItem.scss";

function GalleryItem({ span, post }) {
	const classes = span ? "GalleryItem item_wide" : "GalleryItem";
	return (
		<div className={classes}>
			<div className="GalleryItem__image">
				<img src={post.image} alt="" />
			</div>
			<div className="GalleryItem__info">
				<ul>
					<li className="GalleryItem__info--likes">
						😍 {post.like.length}
					</li>
					<li className="GalleryItem__info--comments">
						✍ {post.comments ? post.comments.length : 0}
					</li>
				</ul>
			</div>
		</div>
	);
}

export default GalleryItem;
