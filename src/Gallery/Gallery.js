import GalleryItem from "./GalleryItem";
import "./Gallery.scss";
import { useState } from "react";

function Gallery({ photos }) {
	const [posts, _] = useState(photos);
	return (
		<div className="Gallery">
			<GalleryItem span={false} />
			<GalleryItem span={true} />
			<GalleryItem span={false} />
			<GalleryItem span={false} />
			<GalleryItem span={false} />
			<GalleryItem span={false} />
		</div>
	);
}

export default Gallery;
