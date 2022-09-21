import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
	return (
		<section>
			<ItemDetail
				title={"holi"}
				img={
					"https://http2.mlstatic.com/D_NQ_NP_833776-MLA48496082251_122021-O.webp"
				}
				price={1344}
				detail={"xss"}
				stock={4}
			/>
		</section>
	);
}

export default ItemDetailContainer;
