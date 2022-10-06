import { useContext } from "react";

import { Link } from "react-router-dom";

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
					<Link to={`/item/${item.id}`}>
						<img src={item.img} alt={item.title} />
					</Link>
				</div>
				<div className="landscape-card--detail">
					<Link to={`/item/${item.id}`}>
						<h3>{item.title}</h3>
						{!cartCard && <p>Stars</p>}
					</Link>
					<h4 style={{ marginBottom: !cartCard ? "0.25rem" : "0.5rem" }}>
						${item.price}
					</h4>
					{!cartCard && item.stock < 7 ? (
						<h5>¡Últimos disponibles!</h5>
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
