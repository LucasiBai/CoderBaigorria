import Card from "../Card/Card";
import CartInstance from "../CartInstance/CartInstance";
import "./ItemListContainer.css";
const ItemListContainer = ({ greeting }) => {
	return (
		<section className="list--box">
			<h2 className="greeting">{greeting}</h2>
			<div className="list--items">
				<Card
					title="Spot Embutir Movil Pvc "
					description="DISPONIBLES EN COLOR BLANCO Y NEGRO"
					price="490"
					img="https://http2.mlstatic.com/D_NQ_NP_647304-MLA48870225809_012022-O.webp"
				/>
				<Card
					title="Lampara Colgante Vintage"
					description="Decorá tu hogar o comercio!"
					price="2.310"
					img="https://http2.mlstatic.com/D_NQ_NP_887880-MLA49215970688_022022-O.webp"
				/>
				<Card
					title="Lampara Colgante Diamante"
					description="Decorá tu hogar o comercio!"
					price="1.284"
					img="https://http2.mlstatic.com/D_NQ_NP_662815-MLA32618384530_102019-W.webp"
				/>
				<Card
					title="Combo 2 Lamparas Colgantes Mini Jaula"
					description="Diámetro cada colgante Ø15cm."
					price="3.671"
					img="https://http2.mlstatic.com/D_NQ_NP_991919-MLA32814396286_112019-O.webp"
				/>
				<Card
					title="Velador Luna Llena Impreso 3d Eco"
					description="Cod. : LUNA0001
          Lámpara Gadnic Luna 13cm 16 Colores RGB + Blanco Luz Cálida y Fría"
					price="5.299"
					img="https://http2.mlstatic.com/D_NQ_NP_720693-MLA50184297436_062022-O.webp"
				/>
			</div>
			<div>
				<CartInstance
					itemName={"Velador Luna Llena Impreso 3d Eco"}
					initial={1}
					stock={14}
					img={
						"https://http2.mlstatic.com/D_NQ_NP_720693-MLA50184297436_062022-O.webp"
					}
				/>
			</div>
		</section>
	);
};

export default ItemListContainer;
