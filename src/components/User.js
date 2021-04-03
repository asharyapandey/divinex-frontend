import "./User.scss";
import { useHistory } from "react-router-dom";

function User({ user }) {
	const history = useHistory();
	return (
		<div
			className="User"
			onClick={() => history.push(`/profile/${user._id}`)}
			style={{ cursor: "pointer" }}
		>
			<div className="User__image">
				<img src={"/" + user.profilePicture} alt="Profile " />
			</div>
			<div className="User__username">{user.username}</div>
		</div>
	);
}

export default User;
