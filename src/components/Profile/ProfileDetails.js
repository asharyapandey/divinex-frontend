import "./ProfileDetails.scss";

const ProfileDetails = () => {
	return (
		<div className="ProfileDetails">
			<div className="ProfileDetails__image">
				<img src="/images/profile_picture/male_img.png" alt="" />
			</div>

			<div className="ProfileDetails__user-options">
				<p>ashrayapandey</p>
				<button className="button edit-profile">Edit Profile</button>
			</div>

			<div className="ProfileDetails__user-stats">
				<ul>
					<li className="stat-item">
						<span className="stat-item__count">200</span>
						posts
					</li>
					<li className="stat-item">
						<span className="stat-item__count">200</span>
						followers
					</li>
					<li className="stat-item">
						<span className="stat-item__count">200</span>
						following
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProfileDetails;
