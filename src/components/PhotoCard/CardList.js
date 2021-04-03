import { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { privateFetch } from "../../utils/fetch";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/UserContext";

function CardList() {
	const [feed, setFeed] = useState([]);
	const { token } = useContext(UserContext);

	const getFeed = async () => {
		try {
			const response = await privateFetch.get("/api/post/feed");
			setFeed(response.data.posts);
		} catch (error) {
			console.log(error);
			toast.error("Some Kind of error occured", {
				position: "top-center",
			});
		}
	};

	const changedSinglePost = (changedPost) => {
		// for updating single post
		const newFeed = [...feed];
		const postIndex = newFeed.findIndex(
			(post) => post._id === changedPost._id
		);
		newFeed[postIndex] = { ...changedPost };
		setFeed(newFeed);
	};

	useEffect(() => {
		getFeed();
	}, [token]);

	return (
		<div>
			{feed.map((post) => (
				<Card
					key={post._id}
					post={post}
					isComments={true}
					setPost={changedSinglePost}
				/>
			))}
		</div>
	);
}

export default CardList;
