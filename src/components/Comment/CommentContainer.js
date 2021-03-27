import AddComment from "./AddComment";
import CommentList from "./CommentList";
import "./Comment.scss";

function CommentContainer() {
	return (
		<div className="CommentContainer">
			<AddComment />
			<CommentList />
		</div>
	);
}

export default CommentContainer;
