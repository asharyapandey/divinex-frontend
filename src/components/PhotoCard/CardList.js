import { useState } from "react";
import Card from "./Card";
import { privateFetch } from "../../utils/fetch";

function CardList() {
	const [feed, setFeed] = useState([]);

	const getFeed = async () => {
		try {
			const response = await privateFetch.get("/api/post/feed");
			setFeed(response.data.posts);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
}

export default CardList;
