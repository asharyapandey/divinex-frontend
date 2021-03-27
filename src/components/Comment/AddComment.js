import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

function AddComment({ addComment, editComment, comment, setComment, action }) {
	const { userInfo } = useContext(UserContext);

	const onSubmit = (e) => {
		e.preventDefault();
		if (action === "") addComment();
		else editComment();
	};
	return (
		<div className="AddComment">
			<div className="AddComment__profile">
				<img
					src={"/" + userInfo.profilePicture}
					alt={userInfo.username}
				/>
			</div>
			<form onSubmit={onSubmit}>
				<div>
					<textarea
						name="caption"
						cols="300"
						rows="6"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					></textarea>
				</div>
				<div>
					<button
						type="submit"
						disabled={comment === "" ? true : false}
					>
						{action === "" ? "Comment" : "Edit"}
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddComment;
