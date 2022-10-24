import { Link, useNavigate } from "react-router-dom";

import GhostButton from "../GhostButton/GhostButton";

import "./PromotionalCard.css";

const PromotionalCard = ({ item }) => {
	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate(item && item.url);
	};

	return (
		<Link to={item && item.url}>
			<article className="promotional-card">
				<div>
					<h5>{item && item.subtitle}</h5>
					<h4>{item && item.title}</h4>
					<GhostButton text={"Ver más"} onClick={handleRedirect} />
				</div>
				<img src={item && item.img} alt={item && item.title} />
			</article>
		</Link>
	);
};

export default PromotionalCard;
