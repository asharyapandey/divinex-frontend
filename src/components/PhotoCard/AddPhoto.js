import { useState } from "react";
import "./AddPhoto.scss";
import { privateFetch } from "../../utils/fetch";
import { toast } from "react-toastify";

function AddPhoto({ modal }) {
	const [caption, setCaption] = useState("");
	const [image, setImage] = useState("images/mock_img.jpg");
	const [file, setFile] = useState();
	const [error, setError] = useState("");

	const handleFileChange = (e) => {
		const selectedFile = e.target.files[0];
		const fileReader = new FileReader();

		fileReader.onload = (event) => {
			setImage(event.target.result);
		};
		if (selectedFile) fileReader.readAsDataURL(selectedFile);
		setFile(selectedFile);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validate()) {
			try {
				const data = new FormData();
				data.append("image", file);
				data.append("caption", caption);

				const response = await privateFetch.post("/api/post", data);
				if (response.data.success) {
					toast.success("Post Added");
					modal.close();
				}
			} catch (error) {
				console.log(error);
				toast.error("Something went wrong");
			}
		}
	};
	const validate = () => {
		if (file.name) {
			setError("");
		} else {
			setError("Please Select a file");
			return false;
		}
		if (caption === "") {
			setError("Please Add a captio");
			return false;
		} else {
			setError("");
		}
		return true;
	};

	return (
		<div className="AddPhoto">
			<div className="AddPhoto__image">
				<img src={image} alt="You selected this" />
			</div>
			<div className="AddPhoto__actions">
				<form onSubmit={handleSubmit}>
					<p>Selected image will appear on side</p>
					<div className="file-up">
						<input
							type="file"
							onChange={handleFileChange}
							accept="image/x-png,image/jpeg"
						/>
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
					<span className="error">{error}</span>
					<button className="button" type="submit">
						Add Post
					</button>
				</form>
			</div>
		</div>
	);
}

export default AddPhoto;
