import "./Card.scss";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link, useHistory } from "react-router-dom";
import Modal from "../Modal";
import AddPhoto from "./AddPhoto";
import { toast } from "react-toastify";
import { privateFetch } from "../../utils/fetch";

const Card = ({ post, isComments = false, setPost = null }) => {
	const { userInfo } = useContext(UserContext);
	const history = useHistory();
	const modal = useRef(null);
	const getTime = () => {
		const date = new Date(post.createdAt);
		const dateNow = new Date();
		const diffInTime = dateNow.getTime() - date.getTime();
		return diffInTime / (1000 * 3600 * 24);
	};
	// Add Photo => cap = Caption

	const deletePost = async () => {
		try {
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

	const closeModal = () => modal.current.close();

	return (
		<>
			<div className="card">
				<div className="card__header">
					<div className="card__header--profile-picture">
						<img src={"/" + post.user.profilePicture} alt="" />
					</div>
					<div className="card__header--username">
						<a href={`/profile/${post.user._id}`}>
							{post.user.username}
						</a>
					</div>
					{userInfo._id === post.user._id ? (
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
					<img src={"/" + post.image} alt="" />
				</div>

				<div className="card__footer">
					<div className="card__footer--icons icon-comp">
						<img src="/images/heart.png" alt="" />
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
