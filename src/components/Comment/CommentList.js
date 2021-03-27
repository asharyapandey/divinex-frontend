import Comment from "./Comment";

const CommentList = () => {
	const comment = [
		{
			comment: "coool",
			commentedBy: {
				username: "asharyapandey",
				profilePicture: "/images/profile_picture/male_img.png",
			},
		},
		{
			comment: "coool",
			commentedBy: {
				username: "asharyapandey",
				profilePicture: "/images/profile_picture/male_img.png",
			},
		},
		{
			comment: "coool",
			commentedBy: {
				username: "asharyapandey",
				profilePicture: "/images/profile_picture/male_img.png",
			},
		},
		{
			comment: "coool",
			commentedBy: {
				username: "asharyapandey",
				profilePicture: "/images/profile_picture/male_img.png",
			},
		},
	];
	return (
		<div className="CommentList">
			{comment.map((comment) => {
				return <Comment comment={comment} />;
			})}
		</div>
	);
};

export default CommentList;
