import { useContext } from "react";

import { faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";

import { cartContext } from "../../contexts/cartContext";

import CustomButton from "../CustomButton/CustomButton";
import ItemCount from "../ItemCount/ItemCount";

import "./LandscapeCard.css";

const LandscapeCard = ({ item, mode }) => {
	const { removeItem, changeItemCount } = useContext(cartContext);

	const cartCard = mode === "cart" ? true : false;

	const changeCartPrice = (count) => {
		changeItemCount(item.id, count);
	};

	return (
		<article className="landscape-card--box">
			<div style={{ display: "flex" }}>
				<div className="landscape-card--img">
					<img src={item.img} alt={item.title} />
				</div>
				<div className="landscape-card--detail">
					<h3>{item.title}</h3>
					{!cartCard && <p>Stars</p>}
					<h4>{item.price}</h4>
					{!cartCard && item.stock < 10 ? (
						<h4>¡Últimos disponibles!</h4>
					) : (
						<ItemCount
							count={item.count}
							initial={1}
							stock={item.stock}
							handleFunction={changeCartPrice}
						/>
					)}
				</div>
			</div>

			<div className="landscape-card--button">
				{!cartCard ? (
					<CustomButton icon={faHeart} />
				) : (
					<CustomButton
						icon={faXmark}
						handleFunction={() => removeItem(item.id)}
					/>
				)}
			</div>
		</article>
	);
};

export default LandscapeCard;
