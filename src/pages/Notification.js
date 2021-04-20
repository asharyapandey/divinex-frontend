import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { privateFetch } from "../utils/fetch";
import "./Notification.scss";

function Notification() {
	const [notifications, setNotifications] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		privateFetch
			.get("/api/user/notification")
			.then((response) => {
				setNotifications(response.data.notifications);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				toast.error("Couldn't Fetch Notifications");
				setLoading(false);
			});
	}, []);

	const deleteNotification = async (id) => {
		try {
			const response = await privateFetch.delete(
				`/api/user/notification/${id}`
			);
			setNotifications(response.data.notifications);
			toast.success("Notification Deleted");
		} catch (error) {
			console.log(error);
			toast.error("Could not Delete Notification");
		}
	};

	if (loading) {
		return <img src="/images/loading.gif" alt="fetching data" />;
	}

	return (
		<div className="Notification">
			<div className="NotificationList">
				{notifications
					? notifications.map((noti) => {
							return (
								<SingleNotification
									user={noti.user}
									key={noti._id}
									action={noti.action}
									deleteNotification={deleteNotification}
									id={noti._id}
								/>
							);
					  })
					: ""}
			</div>
		</div>
	);
}

const SingleNotification = ({ user, action, deleteNotification, id }) => {
	if (action === "Follow") {
		return (
			<div className="SingleNotification">
				<img src={"/" + user.profilePicture} alt="" />
				<Link to={`/profile/${user._id}`}>{user.username}</Link>
				<span>started following you.</span>

				<div className="actions">
					<button
						className="delete-noti"
						onClick={() => deleteNotification(id)}
					>
						Delete
					</button>
				</div>
			</div>
		);
	} else {
		return <div className="SingleNotification">arkai raixa</div>;
	}
};

export default Notification;
