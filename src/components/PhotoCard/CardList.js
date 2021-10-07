import { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { getPrivateFetch } from "../../utils/fetch";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function CardList() {
	const [feed, setFeed] = useState([]);

	const userState = useSelector((state) => state.user);

	const getFeed = async () => {
		try {
			const privateFetch = getPrivateFetch(userState.token);
			const response = await privateFetch.get("/api/post/feed");
			setFeed(response.data.posts);
		} catch (error) {
			console.log(error);
			toast.error("Some Kind of error occurred", {
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
	}, []);

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
