import GhostButton from "../GhostButton/GhostButton";

import "./PromotionalCard.css";

const PromotionalCard = () => {
	return (
		<article>
			<div>
				<h5>RENOVÁ TUS ESPACIOS</h5>
				<h4>HASTA 25% OFF EN DECORACIÓN</h4>
				<GhostButton text={"Ver más"} />
			</div>
			<img
				src="https://http2.mlstatic.com/D_NQ_NP_887880-MLA49215970688_022022-O.webp"
				alt=""
			/>
		</article>
	);
};

export default PromotionalCard;
