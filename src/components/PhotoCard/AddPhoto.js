import { useState } from "react";
import "./AddPhoto.scss";

function AddPhoto() {
	const [caption, setCaption] = useState("");
	const [image, setImage] = useState("images/mock_img.jpg");
	const [file, setFile] = useState();

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		const fileReader = new FileReader();

		fileReader.onload = (event) => {
			setImage(event.target.result);
		};
		fileReader.readAsDataURL(file);
		setFile(file);
	};

	return (
		<div className="AddPhoto">
			<div className="AddPhoto__image">
				<img src={image} alt="You selected this" />
			</div>
			<div className="AddPhoto__actions">
				<form>
					<p>Selected image will appear on side</p>
					<div className="file-up">
						<input type="file" onChange={handleFileChange} />
					</div>
					<div className="form-g">
						<label htmlFor="caption">Caption</label>
						<input
							type="text"
							id="caption"
							onChange={(e) => setCaption(e.target.value)}
							value={caption}
						/>
					</div>
					<button className="button" type="submit">
						Add Post
					</button>
				</form>
			</div>
		</div>
	);
}

export default AddPhoto;
