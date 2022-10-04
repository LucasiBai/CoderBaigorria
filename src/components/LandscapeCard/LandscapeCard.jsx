import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const LandscapeCard = ({ item, mode }) => {
	const type = mode === "cart" ? true : false;
	return (
		<article className="landscape-card--box">
			<div className="landscape-card--img">
				<img src={item.img} alt={item.title} />
			</div>
			<div className="landscape-card--detail">
				<h3>{item.title}</h3>
				{!type && <p>Stars</p>}
				<h4>{item.price}</h4>
				{!type ? (
					<h4>¡Últimos disponibles!</h4>
				) : (
					<ItemCount count={item.count} initial={1} stock={item.stock} />
				)}
			</div>
			<div className="landscape-card--button"></div>
		</article>
	);
};

export default LandscapeCard;
