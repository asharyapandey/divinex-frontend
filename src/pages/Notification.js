import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { privateFetch } from "../utils/fetch";
import "./Notification.scss";

function Notification() {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		privateFetch
			.get("/api/user")
			.then((response) => {
				console.log(response);
				setUser(response.data.user);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				toast.error("Couldn't Fetch Notifications");
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <img src="/images/loading.gif" alt="fetching data" />;
	}

	return (
		<div className="Notification">
			<div className="NotificationList">
				{user.notification.map((noti) => {
					return (
						<SingleNotification
							user={noti.user}
							key={noti._id}
							action={noti.action}
						/>
					);
				})}
			</div>
		</div>
	);
}

const SingleNotification = ({ user, action }) => {
	if (action === "Follow") {
		return (
			<div className="SingleNotification">
				<img src={"/" + user.profilePicture} alt="" />
				<Link to={`/profile/${user._id}`}>{user.username}</Link>
				<span>started following you.</span>
			</div>
		);
	} else {
		return <div className="SingleNotification">arkai raixa</div>;
	}
};

export default Notification;
