import { useState } from "react";
import "./PostDetails.scss";
import { toast } from "react-toastify";
import ShowPhoto from "../components/PhotoCard/ShowPhoto";
import CommentContainer from "../components/Comment/CommentContainer";

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
		<>
			<ShowPhoto post={post} />
			<p className="heading">Comments</p>
			<CommentContainer />
		</>
	);
}

export default PostDetails;
