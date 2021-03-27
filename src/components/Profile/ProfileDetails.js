import "./ProfileDetails.scss";

const ProfileDetails = ({ user, postLength }) => {
	return (
		<div className="ProfileDetails">
			<div className="ProfileDetails__image">
				<img src={"/" + user.profilePicture} alt="" />
			</div>

			<div className="ProfileDetails__user-options">
				<p className="username">{user.username}</p>
				<button className="button edit-profile">Edit Profile</button>
			</div>

			<div className="ProfileDetails__user-stats">
				<ul>
					<li className="stat-item">
						<span className="stat-item__count">{postLength}</span>
						posts
					</li>
					<li className="stat-item">
						<span className="stat-item__count">
							{user.followers ? user.followers.length : 0}
						</span>
						followers
					</li>
					<li className="stat-item">
						<span className="stat-item__count">
							{user.following ? user.following.length : 0}
						</span>
						following
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProfileDetails;
