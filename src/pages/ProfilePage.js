import { useEffect, useState } from "react";
import ProfileDetails from "../components/Profile/ProfileDetails";
import Gallery from "../components/Gallery/Gallery";
import { toast } from "react-toastify";
import { getPrivateFetch } from "../utils/fetch";
import { useSelector } from "react-redux";

const ProfilePage = ({ match }) => {
	const [user, setUser] = useState({});
	const [posts, setPosts] = useState([]);
	const userState = useSelector((state) => state.user);

	const getUser = async () => {
		try {
			const privateFetch = getPrivateFetch(userState.token);
			const respose = await privateFetch.get(
				`/api/user/${match.params.userID}`
			);
			setUser(respose.data.user);
		} catch (error) {
			console.log(error);
			toast.error(error);
		}
	};
	const getPosts = async () => {
		try {
			const privateFetch = getPrivateFetch(userState.token);
			const respose = await privateFetch.get(
				`/api/post/user/${match.params.userID}`
			);
			setPosts(respose.data.posts);
		} catch (error) {
			console.log(error);
			toast.error(error);
		}
	};
	useEffect(() => {
		getUser();
		getPosts();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<ProfileDetails
				user={user}
				postLength={posts.length}
				setUser={(user) => setUser(user)}
			/>
			<hr />
			<Gallery photos={posts} />
		</>
	);
};

export default ProfilePage;
