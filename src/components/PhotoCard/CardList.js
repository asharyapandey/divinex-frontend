import { useState, useEffect } from "react";
import Card from "./Card";
import { privateFetch } from "../../utils/fetch";
import { toast } from "react-toastify";

function CardList() {
	const [feed, setFeed] = useState([]);

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

	useEffect(() => {
		getFeed();
	}, []);

	return (
		<div>
			{feed.map((post) => (
				<Card key={post._id} post={post} isComments={true} />
			))}
		</div>
	);
}

export default CardList;
