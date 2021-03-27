import { useEffect, useState } from "react";
import "./PostDetails.scss";
import { toast } from "react-toastify";
import CommentContainer from "../components/Comment/CommentContainer";
import Card from "../components/PhotoCard/Card";
import { privateFetch } from "../utils/fetch";

function PostDetails({ match }) {
	const [post, setPost] = useState({
		_id: "604f07393b8cc82cdc35dff6",
		caption: "Darth JarJar",
		image: "images\\posts\\POST-Wed Mar 17 2021-EtKUic2XAAMdEvq.jpeg",
		user: {
			username: "ashish",
		},
	});
	const [comments, setComments] = useState([]);
	const getFeed = async () => {
		try {
			const response = await privateFetch.get(
				`/api/post/${match.params.postID}`
			);
			console.log(response);
			setPost(response.data.post);
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

	return (
		<div className="PostDetails">
			<div className="post">
				<Card post={post} />
			</div>
			<p className="heading">Comments</p>
			<CommentContainer />
		</div>
	);
}

export default PostDetails;
