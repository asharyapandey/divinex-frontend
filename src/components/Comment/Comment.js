const Comment = ({ comment }) => {
	return (
		<div className="Comment">
			<div className="Comment__profile">
				<img
					src={comment.commentedBy.profilePicture}
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
			</div>
			<div className="Comment__actions">
				<button>Edit</button>
				<button>delete</button>
			</div>
		</div>
	);
};

export default Comment;
