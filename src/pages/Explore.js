import Gallery from "../components/Gallery/Gallery";
import { useState, useEffect } from "react";
import { privateFetch } from "../utils/fetch";
import { toast } from "react-toastify";

const Explore = () => {
	const [posts, setPosts] = useState([]);

	const getPosts = async () => {
		try {
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
