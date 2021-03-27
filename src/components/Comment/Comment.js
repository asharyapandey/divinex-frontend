const Comment = ({ comment }) => {
	return (
		<div className="Comment">
			<hr />
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
				<div className="Comment__details--time">Few hours ago</div>
			</div>
			<div className="Comment__actions">
				<button className="button-edit">Edit</button>
				<button className="button-delete">Delete</button>
			</div>
			<hr />
		</div>
	);
};

export default Comment;
