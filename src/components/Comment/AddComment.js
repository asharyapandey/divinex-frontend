import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function AddComment() {
	const { userInfo } = useContext(UserContext);
	return (
		<div className="AddComment">
			<div className="AddComment__profile">
				<img src={userInfo.profilePicture} alt={userInfo.username} />
			</div>
			<form>
				<div>
					<textarea name="caption" cols="300" rows="6">
						Caption
					</textarea>
				</div>
				<div>
					<button type="submit">Comment</button>
				</div>
			</form>
		</div>
	);
}

export default AddComment;
