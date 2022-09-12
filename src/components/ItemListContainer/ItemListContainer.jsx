import Card from "../Card/Card";
import "./ItemListContainer.css";
const ItemListContainer = ({ greeting }) => {
	return (
		<section className="list--box">
			<h2 className="greeting">{greeting}</h2>
			<div className="list--items">
				<Card
					title="Spot Embutir Movil Pvc Blanco O Negro "
					description="DISPONIBLES EN COLOR BLANCO Y NEGRO"
					price="490"
					img="https://http2.mlstatic.com/D_NQ_NP_647304-MLA48870225809_012022-O.webp"
				/>
				<Card
					title="Caja"
					description="holi"
					price="20.000"
					img="http://woodcba.ml/Assets/Img/mueble1.jpg"
				/>
				<Card
					title="Caja"
					description="holi"
					price="20.000"
					img="http://woodcba.ml/Assets/Img/mueble1.jpg"
				/>
				<Card
					title="Caja"
					description="holi"
					price="20.000"
					img="http://woodcba.ml/Assets/Img/mueble1.jpg"
				/>
				<Card
					title="Caja"
					description="holi"
					price="20.000"
					img="http://woodcba.ml/Assets/Img/mueble1.jpg"
				/>
			</div>
		</section>
	);
};

export default ItemListContainer;
