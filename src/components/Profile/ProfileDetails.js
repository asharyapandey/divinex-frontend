import "./ProfileDetails.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const ProfileDetails = ({ user, postLength }) => {
	const { userInfo } = useContext(UserContext);

	return (
		<div className="ProfileDetails">
			<div className="ProfileDetails__image">
				<img src={"/" + user.profilePicture} alt="" />
			</div>

			<div className="ProfileDetails__user-options">
				<p className="username">{user.username}</p>
				{userInfo._id === user._id ? (
					<button className="button edit-profile">
						Edit Profile
					</button>
				) : (
					<button className="button edit-profile">Follow</button>
				)}
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
