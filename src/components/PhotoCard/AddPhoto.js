import { useState } from "react";
import "./AddPhoto.scss";
import { getPrivateFetch } from "../../utils/fetch";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function AddPhoto({
	modal,
	cap = "",
	img = "images/mock_img.jpg",
	id = "",
	edit = false,
	setPost = null,
}) {
	const [caption, setCaption] = useState(cap);
	const [image, setImage] = useState("/" + img);
	const [file, setFile] = useState();
	const [error, setError] = useState("");
	const userState = useSelector((state) => state.user);

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

				if (edit) {
					const privateFetch = getPrivateFetch(userState.token);
					const response = await privateFetch.put(
						`/api/post/${id}`,
						data
					);
					if (response.data.success) {
						toast.success("Post Updated");
						setPost(response.data.post);
						modal();
					}
				} else {
					const privateFetch = getPrivateFetch(userState.token);
					const response = await privateFetch.post("/api/post", data);
					if (response.data.success) {
						toast.success("Post Added");
						modal();
					}
				}
			} catch (error) {
				console.log(error.response);
				toast.error("Something went wrong");
			}
		}
	};
	const validate = () => {
		if (file) {
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
						{edit ? "Edit Post" : "Add Post"}
					</button>
				</form>
			</div>
		</div>
	);
}

export default AddPhoto;
