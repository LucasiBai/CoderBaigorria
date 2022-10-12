import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./SearchBar.css";

const SearchBar = () => {
	return (
		<span className="search-bar--box">
			<input type="text" className="search-bar" />
			<span style={{ display: "flex" }}>
				<hr />
				<button>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</span>
		</span>
	);
};

export default SearchBar;
