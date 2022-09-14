import GhostButton from "../GhostButton/GhostButton";
import ItemCount from "../ItemCount/ItemCount";
import "./CartInstance.css";

export default function CartInstance({ itemName, initial, stock, img }) {
	return (
		<div className="counter-box">
			<h4 className="counter-box__item">{itemName}</h4>
			<img src={img} alt={itemName} className="card--img" />
			<ItemCount
				className="counter-box__item"
				itemName={itemName}
				initial={initial}
				stock={stock}
				margin="0.7rem"
			/>
			<GhostButton text="Agregar al carrito" className="counter-box__item" />
		</div>
	);
}
