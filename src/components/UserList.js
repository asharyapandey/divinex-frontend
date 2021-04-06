import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../contexts/UserContext";
import { privateFetch } from "../utils/fetch";

const UserList = () => {
	const [users, setUsers] = useState([]);
	const { userInfo } = useContext(UserContext);

	useEffect(() => {
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
					<img src={"/" + userInfo.profilePicture} alt="" />
				</div>
				<div className="username">
					<Link to={`/profile/${userInfo._id}`}>
						{userInfo.username}
					</Link>
				</div>
			</div>
			<p>Suggested Users For You</p>
			{users.map((user) => {
				return (
					<div className="user" key={user._id}>
						<div className="image">
							<img src={"/" + user.profilePicture} alt="" />
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
