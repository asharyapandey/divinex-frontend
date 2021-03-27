import "./Card.scss";
import { useContext, useRef } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

const Card = ({ post, isComments = false }) => {
	const { userInfo } = useContext(UserContext);
	const modal = useRef(null);

	return (
		<>
			<div className="card">
				<div className="card__header">
					<div className="card__header--profile-picture">
						<img
							src={
								post.user.profilePicture ||
								"images/profile_picture/male_img.png"
							}
							alt=""
						/>
					</div>
					<div className="card__header--username">
						<a href={`/profile/${post.user._id}`}>
							{post.user.username}
						</a>
					</div>
					{userInfo._id === post.user._id ? (
						<div className="card__header--actions">
							<button className="button button--action button--action-1">
								Edit
							</button>
							<button className="button button--action button--action-2">
								Delete
							</button>
						</div>
					) : (
						""
					)}
				</div>
				<div className="card__image">
					<img src={post.image} alt="" />
				</div>

				<div className="card__footer">
					<div className="card__footer--icons icon-comp">
						<img src="images/heart.png" alt="" />
					</div>
					<div className="card__footer--caption">
						<div className="username">
							<a href={`/profile/${post.user._id}`}>
								{post.user.username}
							</a>
						</div>
						<p className="caption">{post.caption}</p>
					</div>
					<div className="card__footer--comments">
						{isComments ? (
							<Link
								to={`/post/${post._id}`}
								className="comments__option"
							>
								view all comments
							</Link>
						) : (
							""
						)}
					</div>
					<div className="card__footer--time">few hours ago</div>
				</div>
			</div>
		</>
	);
};

export default Card;
