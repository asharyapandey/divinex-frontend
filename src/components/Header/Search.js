import { useState, useEffect } from "react";
import "./Search.scss";

const Search = () => {
	const [showResults, setShowResults] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const handleChange = (e) => {
		// do REST call
		setShowResults(true);
		setSearchTerm(e.target.value);
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
					<p>No Terms</p>
				</div>
			) : (
				""
			)}
		</>
	);
};

export default Search;
