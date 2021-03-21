import "./User.scss";

function User({ user }) {
	return (
		<div className="User">
			<div className="User__image">
				<img
					src={
						user.profilePicture ||
						"/images/profile_picture/male_img.png"
					}
					alt="Profile "
				/>
			</div>
			<div className="User__username">{user.username}</div>
		</div>
	);
}

export default User;
