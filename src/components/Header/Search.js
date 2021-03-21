import { useState, useEffect } from "react";
import "./Search.scss";
import { privateFetch } from "../../utils/fetch";
import { toast } from "react-toastify";

const Search = () => {
	const [showResults, setShowResults] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const handleChange = async (e) => {
		// do REST call
		setShowResults(true);
		setSearchTerm(e.target.value);
		try {
			const response = await privateFetch.get(
				`/api/user/search/?term=${searchTerm}`
			);
			setSearchResults(response.data.users);
		} catch (error) {
			console.log(error);
			toast.error("Could not search for user");
		}
	};

	useEffect(() => {
		if (searchTerm === "") setShowResults(false);
	}, [searchTerm]);

	return (
		<>
			<form>
				<input
					onChange={handleChange}
					value={searchTerm}
					type="text"
					placeholder="Search"
				/>
			</form>
			{showResults ? (
				<div className="search__results">
					{searchResults.length > 0 ? (
						searchResults.map((result) => <p>{result.username}</p>)
					) : (
						<p>No Users Avilable</p>
					)}
				</div>
			) : (
				""
			)}
		</>
	);
};

export default Search;
