import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { privateFetch } from "../utils/fetch";
import "./EditProfile.scss";

const EditProfilePage = ({ match }) => {
	const [id, setID] = useState("");
	const [email, setEmail] = useState("");
	const [image, setImage] = useState("");
	const [file, setFile] = useState(null);
	const [gender, setGender] = useState("Male");
	const history = useHistory();

	const handleFileChange = (e) => {
		const selectedFile = e.target.files[0];
		const fileReader = new FileReader();

		fileReader.onload = (event) => {
			setImage(event.target.result);
		};
		if (selectedFile) fileReader.readAsDataURL(selectedFile);
		setFile(selectedFile);
	};

	const getUser = async () => {
		try {
			const respose = await privateFetch.get(
				`/api/user/${match.params.userID}`
			);
			setEmail(respose.data.user.email);
			setID(respose.data.user._id);
			setImage("/" + respose.data.user.profilePicture);
		} catch (error) {
			console.log(error);
			toast.error(error);
		}
	};
	useEffect(() => {
		getUser();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const data = new FormData();
			if (file) data.append("image", file);
			data.append("email", email);
			data.append("gender", gender);
			const response = await privateFetch.put(`/api/user/${id}`, data);
			if (response.data.success) {
				toast.success("Profile Updated");
				history.push(`/profile/${id}`);
			}
		} catch (error) {
			console.log(error.response);
			toast.error("Something went wrong");
		}
	};
	return (
		<div className="edit-profile">
			<div className="holder">
				<form onSubmit={handleSubmit}>
					<div className="edit-profile__image">
						<img src={image} alt="" />
					</div>
					<div className="form-g">
						<label htmlFor="email">Email</label>
						<input type="email" required id="email" value={email} />
					</div>
					<div className="form-g">
						<label htmlFor="gender">Gender:</label>
						<select
							name="gender"
							id="gender"
							value={gender}
							onChange={(e) => setGender(e.target.value)}
						>
							<option value="Male">Male</option>
							<option value="Female">Female</option>

							<option value="Others">Others</option>
						</select>
					</div>
					<div className="form-g">
						<label htmlFor="profile">Update Profile Picture</label>
						<input
							type="file"
							id="profile"
							onChange={handleFileChange}
							accept="image/x-png,image/jpeg"
						/>
					</div>
					<button type="submit" className="button">
						Update Profile
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditProfilePage;
