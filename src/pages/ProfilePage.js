import { useEffect, useState } from "react";
import ProfileDetails from "../components/Profile/ProfileDetails";
import Gallery from "../components/Gallery/Gallery";
import { toast } from "react-toastify";
import { privateFetch } from "../utils/fetch";

const ProfilePage = () => {
	const [user, setUser] = useState({});
	const [posts, setPosts] = useState([]);

	const getUser = async () => {
		try {
			const respose = await privateFetch.get("/api/user/");
			setUser(respose.data.user);
		} catch (error) {
			console.log(error);
			toast.error(error);
		}
	};
	const getPosts = async () => {
		try {
			const respose = await privateFetch.get("/api/post/");
			setPosts(respose.data.posts);
		} catch (error) {
			console.log(error);
			toast.error(error);
		}
	};
	useEffect(() => {
		getUser();
		getPosts();
	}, []);

	return (
		<>
			<ProfileDetails user={user} postLength={posts.length} />
			<hr />
			<Gallery photos={posts} />
		</>
	);
};

export default ProfilePage;
