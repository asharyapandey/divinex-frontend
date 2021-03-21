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
			toast.error("data ta ayo", {
				position: "top-center",
			});
		} catch (error) {
			console.log(error);
			toast.error(error.response.data.error, {
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
				<Card key={post._id} post={post} />
			))}
		</div>
	);
}

export default CardList;
