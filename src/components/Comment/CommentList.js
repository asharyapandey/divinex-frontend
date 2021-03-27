import Comment from "./Comment";

const CommentList = ({ comments, deleteComment, setID, setComment }) => {
	return (
		<div className="CommentList">
			{comments.map((comment) => {
				return (
					<Comment
						key={comment._id}
						comment={comment}
						deleteComment={deleteComment}
						setID={setID}
						setComment={setComment}
					/>
				);
			})}
		</div>
	);
};

export default CommentList;
