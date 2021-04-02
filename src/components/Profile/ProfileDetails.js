import "./ProfileDetails.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { toast } from "react-toastify";
import { privateFetch } from "../../utils/fetch";
import { useHistory } from "react-router";

const ProfileDetails = ({ user, postLength }) => {
	const { userInfo, setUser, logout } = useContext(UserContext);
	const history = useHistory();

	const doesFollow = () => {
		const following = userInfo.following;
		let flag = false;
		following.forEach((follow) => {
			if (follow._id === user._id) flag = true;
		});
		return flag;
	};

	const follow = async () => {
		try {
			const response = await privateFetch.post(
				`/api/user/follow/${user._id}`
			);
			if (response.data.success) {
				toast.success("Followed User");
				setUser(response.data.user);
			}
		} catch (error) {
			console.log(error);
			toast.error("Could not follow user \n Please try again");
		}
	};
	const unFollow = async () => {
		try {
			const response = await privateFetch.delete(
				`/api/user/unfollow/${user._id}`
			);
			if (response.data.success) {
				toast.success("Unfollowed User");
				setUser(response.data.user);
			}
		} catch (error) {
			console.log(error);
			toast.error("Could not unfollow user \n Please try again");
		}
	};

	return (
		<div className="ProfileDetails">
			<div className="ProfileDetails__image">
				<img src={"/" + user.profilePicture} alt="" />
			</div>

			<div className="ProfileDetails__user-options">
				<p className="username">{user.username}</p>
				{userInfo._id === user._id ? (
					<div className="user-action">
						<button
							className="button edit-profile"
							onClick={() =>
								history.push(`/editprofile/${user._id}`)
							}
						>
							Edit Profile
						</button>
						<button
							className="button logout"
							onCLick={() => logout()}
						>
							Logout
						</button>
					</div>
				) : doesFollow() ? (
					<button className="button edit-profile" onClick={unFollow}>
						Unfollow
					</button>
				) : (
					<button className="button edit-profile" onClick={follow}>
						Follow
					</button>
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
