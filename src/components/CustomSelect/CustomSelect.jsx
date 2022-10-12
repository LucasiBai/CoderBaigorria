import { useState } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./CustomSelect.css";

const CustomSelect = ({ items, title }) => {
	const [isOver, setIsOver] = useState(false);

	const mouseOver = (bool) => {
		setTimeout(() => {
			setIsOver(bool ? true : false);
		}, 300);
	};

	return (
		<div
			onMouseOver={() => mouseOver(true)}
			onMouseOut={() => mouseOver(false)}
			className="custom-select"
		>
			<p className="custom-select--title">
				{title}{" "}
				<span style={{ fontSize: 11 }}>
					<FontAwesomeIcon icon={faAngleDown} />
				</span>
			</p>
			{isOver && (
				<span className="custom-select-box">
					{items.map((item) => (
						<Link key={item.title} to={item.link}>
							{item.title}
						</Link>
					))}
				</span>
			)}
		</div>
	);
};

export default CustomSelect;
