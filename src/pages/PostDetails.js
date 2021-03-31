import { useEffect, useState } from "react";
import "./PostDetails.scss";
import { toast } from "react-toastify";
import CommentContainer from "../components/Comment/CommentContainer";
import Card from "../components/PhotoCard/Card";
import { privateFetch } from "../utils/fetch";
import AddComment from "../components/Comment/AddComment";
import CommentList from "../components/Comment/CommentList";

function PostDetails({ match }) {
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [loading, setLoading] = useState(true);
	// stores id of comment to be edited
	const [action, setAction] = useState("");
	const [comment, setComment] = useState("");
	const getFeed = async () => {
		try {
			setLoading(true);
			const response = await privateFetch.get(
				`/api/post/${match.params.postID}`
			);
			console.log(response);
			setPost(response.data.post);
			setLoading(false);
		} catch (error) {
			console.log(error);
			toast.error("Some Kind of error occured", {
				position: "top-center",
			});
		}
	};

	const getComments = async () => {
		try {
			const response = await privateFetch.get(
				`/api/post/comment/${match.params.postID}`
			);
			console.log(response);
			setComments(response.data.comments);
		} catch (error) {
			console.log(error);
			toast.error("Some Kind of error occured");
		}
	};

	useEffect(() => {
		getFeed();
		getComments();
	}, []);

	const addComment = async () => {
		try {
			const response = await privateFetch.post(
				`/api/post/comment/${match.params.postID}`,
				{ comment }
			);
			console.log(response);
			const newComments = [...comments];
			newComments.push(response.data.comment);
			setComments(newComments);
			toast.success("Comment added");
		} catch (error) {
			console.log(error);
			toast.error("Some Kind of error occured");
		}
	};
	const editComment = async () => {
		try {
			const response = await privateFetch.put(
				`/api/post/comment/${action}`,
				{
					comment,
				}
			);
			console.log(response);
			let newComments = [...comments];
			let commentIndex = newComments.findIndex(
				(comment) => comment._id === action
			);
			newComments[commentIndex].comment = comment;
			setComments(newComments);
			setAction("");
			toast.success("Comment Edited");
		} catch (error) {
			console.log(error);
			toast.error("Some Kind of error occured");
		}
	};

	const deleteComment = async (id) => {
		try {
			const response = await privateFetch.delete(
				`/api/post/comment/${id}`
			);
			console.log(response);
			let newComments = [...comments];
			newComments = newComments.filter((comment) => comment._id !== id);
			setComments(newComments);
			toast.success("Comment Deleted");
		} catch (error) {
			console.log(error);
			toast.error("Some Kind of error occured");
		}
	};

	if (loading) {
		return <img src="/images/loading.gif" alt="loading" />;
	} else {
		return (
			<div className="PostDetails">
				<div className="post">
					<Card post={post} setPost={(post) => setPost(post)} />
				</div>
				<p className="heading">Comments</p>
				<CommentContainer>
					<AddComment
						addComment={addComment}
						editComment={editComment}
						action={action}
						comment={comment}
						setComment={(comment) => setComment(comment)}
					/>
					<CommentList
						comments={comments}
						deleteComment={deleteComment}
						setID={(id) => setAction(id)}
						setComment={(comment) => setComment(comment)}
					/>
				</CommentContainer>
			</div>
		);
	}
}

export default PostDetails;
