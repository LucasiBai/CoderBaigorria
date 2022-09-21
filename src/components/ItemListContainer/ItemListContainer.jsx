import { useState, useEffect } from "react";

import CartInstance from "../CartInstance/CartInstance";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

import getProducts from "../../services/mockAPI";

const ItemListContainer = ({ greeting }) => {
	const [data, setData] = useState([]);

	// Obtenemos los datos
	const getData = async () => {
		const data = await getProducts();
		setData(data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<section className="list--box">
			<h2 className="greeting">{greeting}</h2>
			<ItemList datos={data} />
			{/* <div>
				<CartInstance
					itemName={"Velador Luna Llena Impreso 3d Eco"}
					initial={1}
					stock={14}
					img={
						"https://http2.mlstatic.com/D_NQ_NP_720693-MLA50184297436_062022-O.webp"
					}
				/>
			</div> */}
		</section>
	);
};

export default ItemListContainer;
