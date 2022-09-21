import GhostButton from "../GhostButton/GhostButton";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./CartInstance.css";

export default function CartInstance({ initial, stock }) {
	return (
		<div className="counter-box">
			<div>
				<h3>Cantidad</h3>
				<ItemCount
					className="counter-box__item"
					initial={initial}
					stock={stock}
					margin="0.7rem 0.7rem 1.5rem 0.7rem"
				/>
			</div>
			<Button text="Comprar ahora" className="counter-box__item" />
			<GhostButton text="Agregar al carrito" className="counter-box__item" />
		</div>
	);
}
