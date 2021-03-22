import GalleryItem from "./GalleryItem";
import "./Gallery.scss";
import { useEffect, useState } from "react";

function Gallery({ photos }) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		setPosts(photos);
	}, [photos]);

	const wideImageLocation = [1, 7, 13, 19];
	return (
		<div className="Gallery">
			{posts.map((post, index) => {
				let span = false;
				if (wideImageLocation.includes(index)) span = true;

				return <GalleryItem key={post._id} span={span} post={post} />;
			})}
		</div>
	);
}

export default Gallery;
