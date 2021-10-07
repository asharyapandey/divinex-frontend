import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getPrivateFetch } from "../utils/fetch";
import { useSelector } from "react-redux";
import BASE_URL from "../utils/baseUrl";

const UserList = () => {
	const [users, setUsers] = useState([]);
	const userState = useSelector((state) => state.user);

	useEffect(() => {
		const privateFetch = getPrivateFetch(userState.token);
		// getting suggested users
		privateFetch
			.get("/api/user/suggest")
			.then((response) => setUsers(response.data.users))
			.catch((error) => {
				console.log(error);
				toast.error("Couldnot get suggested users");
			});
	}, []);

	return (
		<div className="UserList">
			<div className="user">
				<div className="image">
					<img
						src={BASE_URL + "/" + userState.user.profilePicture}
						alt=""
					/>
				</div>
				<div className="username">
					<Link to={`/profile/${userState.user._id}`}>
						{userState.user.username}
					</Link>
				</div>
			</div>
			<p>Suggested Users For You</p>
			{users.map((user) => {
				return (
					<div className="user" key={user._id}>
						<div className="image">
							<img
								src={BASE_URL + "/" + user.profilePicture}
								alt=""
							/>
						</div>
						<div className="username">
							<Link to={`/profile/${user._id}`}>
								{user.username}
							</Link>
						</div>
					</div>
				);
			})}
			<span>Created by Asharya Pandey</span>
		</div>
	);
};

export default UserList;
