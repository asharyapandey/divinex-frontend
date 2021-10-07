import Gallery from "../components/Gallery/Gallery";
import { useState, useEffect } from "react";
import { getPrivateFetch } from "../utils/fetch";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Explore = () => {
	const [posts, setPosts] = useState([]);
	const userState = useSelector((state) => state.user);

	const getPosts = async () => {
		try {
			const privateFetch = getPrivateFetch(userState.token);
			const respose = await privateFetch.get("/api/post/explore");
			setPosts(respose.data.posts);
		} catch (error) {
			console.log(error);
			toast.error(error);
		}
	};
	useEffect(() => {
		getPosts();
	}, []);
	return (
		<div>
			<Gallery photos={posts} />
		</div>
	);
};

export default Explore;
