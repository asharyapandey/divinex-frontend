import AddComment from "./AddComment";
import CommentList from "./CommentList";
import "./Comment.scss";

function CommentContainer() {
	return (
		<div className="CommentContainer">
			<CommentList />
			<AddComment />
		</div>
	);
}

export default CommentContainer;
