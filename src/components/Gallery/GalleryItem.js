import "./GalleryItem.scss";
import { useHistory } from "react-router-dom";
import BASE_URL from "../../utils/baseUrl";

function GalleryItem({ span, post }) {
	const history = useHistory();
	const classes = span ? "GalleryItem item_wide" : "GalleryItem";
	return (
		<div className={classes}>
			<div className="GalleryItem__image">
				<img src={BASE_URL + "/" + post.image} alt="" />
			</div>
			<div
				className="GalleryItem__info"
				onClick={() => history.push(`/post/${post._id}`)}
			>
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
