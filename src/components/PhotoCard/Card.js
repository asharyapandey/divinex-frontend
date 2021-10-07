import "./Card.scss";
import { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Modal from "../Modal";
import AddPhoto from "./AddPhoto";
import { toast } from "react-toastify";
import { getPrivateFetch } from "../../utils/fetch";
import { useSelector } from "react-redux";
import BASE_URL from "../../utils/baseUrl";

const Card = ({ post, isComments = false, setPost = null }) => {
	const history = useHistory();
	const modal = useRef(null);
	const [isLiked, setIsLikes] = useState(false);
	const userState = useSelector((state) => state.user);

	const getTime = () => {
		const date = new Date(post.createdAt);
		const dateNow = new Date();
		const diffInTime = dateNow.getTime() - date.getTime();
		return diffInTime / (1000 * 3600 * 24);
	};
	// Add Photo => cap = Caption

	const deletePost = async () => {
		try {
			const privateFetch = getPrivateFetch(userState.token);
			const response = await privateFetch.delete(`/api/post/${post._id}`);
			if (response.data.success) {
				toast.success("Post Deleted");
				history.push(`/profile/${post.user._id}`);
			}
		} catch (error) {
			console.log(error);
			toast.error("Could not delete the post");
		}
	};
	useEffect(() => {
		const likes = post.like;
		let flag = false;
		likes.forEach((like) => {
			if (like.user === userState.user._id) flag = true;
		});
		setIsLikes(flag);
		// eslint-disable-next-line
	}, []);

	const triggerLikes = async () => {
		// the function is responsible for liking and unliking
		try {
			if (isLiked) {
				// unliking

				const privateFetch = getPrivateFetch(userState.token);
				const response = await privateFetch.delete(
					`/api/post/unlike/${post._id}`
				);
				if (response.data.success) {
					setPost(response.data.post);
					setIsLikes(false);
				}
			} else {
				//liking
				const privateFetch = getPrivateFetch(userState.token);
				const response = await privateFetch.post(
					`/api/post/like/${post._id}`
				);
				if (response.data.success) {
					setPost(response.data.post);
					setIsLikes(true);
				}
			}
		} catch (error) {
			console.log(error);
			toast.error("couldn't like/unlike post");
		}
	};

	const closeModal = () => modal.current.close();
	return (
		<>
			<div className="card">
				<div className="card__header">
					<div className="card__header--profile-picture">
						<img
							src={BASE_URL + "/" + post.user.profilePicture}
							alt=""
						/>
					</div>
					<div className="card__header--username">
						<a href={`/profile/${post.user._id}`}>
							{post.user.username}
						</a>
					</div>
					{userState.user._id === post.user._id ? (
						<div className="card__header--actions">
							<button
								className="button button--action button--action-1"
								onClick={() => modal.current.open()}
							>
								Edit
							</button>
							<button
								className="button button--action button--action-2"
								onClick={deletePost}
							>
								Delete
							</button>
						</div>
					) : (
						""
					)}
				</div>
				<div className="card__image">
					<img src={BASE_URL + "/" + post.image} alt="" />
				</div>

				<div className="card__footer">
					<div
						className="card__footer--icons icon-comp"
						onClick={triggerLikes}
					>
						<img
							src={
								isLiked
									? "/images/heart_filled.png"
									: "/images/heart.png"
							}
							alt=""
						/>
					</div>
					<div className="card__footer--likes">
						{post.like.length} likes
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
					<div className="card__footer--time">
						{Math.round(getTime())} days ago
					</div>
				</div>
				<Modal ref={modal}>
					<AddPhoto
						modal={closeModal}
						cap={post.caption}
						img={post.image}
						edit={true}
						id={post._id}
						setPost={setPost}
					/>
				</Modal>
			</div>
		</>
	);
};

export default Card;
