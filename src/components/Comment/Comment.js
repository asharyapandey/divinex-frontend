const Comment = ({ comment, deleteComment, setID, setComment }) => {
	const getTime = () => {
		const date = new Date(comment.commentedAt);
		const dateNow = new Date();
		const diffInTime = dateNow.getTime() - date.getTime();
		return diffInTime / (1000 * 3600 * 24);
	};
	return (
		<div className="Comment">
			<hr />
			<div className="Comment__profile">
				<img
					src={"/" + comment.commentedBy.profilePicture}
					alt={comment.commentedBy.username}
				/>
			</div>
			<div className="Comment__details">
				<div className="Comment__details--username">
					{comment.commentedBy.username}
				</div>
				<div className="Comment__details--comment">
					{comment.comment}
				</div>
				<div className="Comment__details--time">
					{Math.round(getTime())} days ago
				</div>
			</div>
			<div className="Comment__actions">
				<button
					className="button-edit"
					onClick={() => {
						setID(comment._id);
						setComment(comment.comment);
					}}
				>
					Edit
				</button>
				<button
					className="button-delete"
					onClick={() => deleteComment(comment._id)}
				>
					Delete
				</button>
			</div>
			<hr />
		</div>
	);
};

export default Comment;
