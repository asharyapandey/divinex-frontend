import { useState } from "react";
import "./PostDetails.scss";
import { toast } from "react-toastify";
import CommentContainer from "../components/Comment/CommentContainer";
import Card from "../components/PhotoCard/Card";

function PostDetails() {
	const post = {
		image: "images/posts/mock_img.jpg",
		caption: "this is the new thing",
		user: {
			profilePicture: "/images/profile_picture/male_img.png",
			username: "asharyapandey",
		},
	};

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
