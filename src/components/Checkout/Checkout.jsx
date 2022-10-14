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
				<h1>Gracias {orderData.buyer.firstName} por tu compra!</h1>
				<h5>Número de Orden {orderData.orderId}</h5>
				<p>
					Te hemos mandado a tu mail {orderData.buyer.email} la factura de
					compra.
				</p>
			</section>
		</main>
	);
};

export default Checkout;
