import { Link } from "react-router-dom";

const Checkout = ({ orderData }) => {
	return (
		<main>
			<section
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					margin: "2rem",
				}}
			>
				<h2 style={{ margin: "2rem" }}>
					Gracias por tu compra {orderData.buyer.firstName}!
				</h2>
				<h5>Número de Orden {orderData.orderId}</h5>
				<p style={{ margin: "0 0 1rem" }}>
					Te hemos mandado a tu mail {orderData.buyer.email} la factura de
					compra.
				</p>
				<Link to="/">
					<label style={{ color: "#009688" }}>Volver al menú</label>
				</Link>
			</section>
		</main>
	);
};

export default Checkout;
