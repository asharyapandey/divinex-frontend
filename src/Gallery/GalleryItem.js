import "./GalleryItem.scss";

function GalleryItem() {
	return (
		<div className="GalleryItem">
			<div className="GalleryItem__image">
				<img src="/images/profile_picture/male_img.png" alt="" />
			</div>
			<div className="GalleryItem__info">
				<ul>
					<li className="GalleryItem__info--likes">200</li>
					<li className="GalleryItem__info--comments">200</li>
				</ul>
			</div>
		</div>
	);
}

export default GalleryItem;
