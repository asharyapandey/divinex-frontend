import { useState, useEffect, useRef } from "react";
import "./Search.scss";
import { privateFetch } from "../../utils/fetch";
import { toast } from "react-toastify";
import User from "../User";

const Search = () => {
	const [showResults, setShowResults] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const ref = useRef(null);

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

	const handleClickOutside = (e) => {
		if (ref.current && !ref.current.contains(e.target)) {
			setShowResults(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);

		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);

	return (
		<div ref={ref}>
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
						searchResults.map((result) => (
							<User key={result._id} user={result} />
						))
					) : (
						<p>No Users Avilable</p>
					)}
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Search;
