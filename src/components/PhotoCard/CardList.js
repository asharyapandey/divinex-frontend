import { useState } from "react";
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
			toast.error(error.response.data.error, {
				position: "top-center",
			});
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
