import GalleryItem from "./GalleryItem";
import "./Gallery.scss";
import { useEffect, useState } from "react";

function Gallery({ photos }) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		setPosts(photos);
	}, [photos]);

	const wideImageLocation = [2, 8, 14, 20];
	return (
		<div className="Gallery">
			<GalleryItem span={false} />
			<GalleryItem span={true} />
			<GalleryItem span={false} />
			<GalleryItem span={false} />
			<GalleryItem span={false} />
			<GalleryItem span={false} />

			{posts.map}
		</div>
	);
}

export default Gallery;
