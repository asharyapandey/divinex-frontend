import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { privateFetch } from "../utils/fetch";
import "./EditProfile.scss";

const EditProfilePage = ({ match }) => {
	const [user, setUser] = useState({});

	const getUser = async () => {
		try {
			const respose = await privateFetch.get(
				`/api/user/${match.params.userID}`
			);
			setUser(respose.data.user);
		} catch (error) {
			console.log(error);
			toast.error(error);
		}
	};
	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="edit-profile">
			<div className="holder">
				<form>
					<div className="edit-profile__image">
						<img src={"/" + user.profilePicture} alt="" />
					</div>
					<div className="form-g">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							value={user.username}
						/>
					</div>
					<div className="form-g">
						<label htmlFor="email">Email</label>
						<input type="text" id="email" value={user.email} />
					</div>
					<div className="form-g">
						<label htmlFor="profile">Update Profile Picture</label>
						<input type="file" id="profile" />
					</div>
					<button type="submit" className="button">
						Update Profile
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditProfilePage;
