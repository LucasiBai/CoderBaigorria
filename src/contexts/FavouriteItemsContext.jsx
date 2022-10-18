import { createContext, useState, useEffect } from "react";

import {
	getFavouriteProducts,
	// addProductToFavourite,
	// deleteFavouriteProduct,
} from "../services/firestore";

const FavouriteItemsContext = createContext();

const FavouriteItemsContextProvider = ({ children }) => {
	const [favouriteList, setFavouriteList] = useState([]);

	const getFavList = async () => {
		const items = await getFavouriteProducts();
		setFavouriteList(items);
	};

	const isInFav = (id) => favouriteList.includes(id);

	useEffect(() => {
		getFavList();
	}, []);

	return (
		<FavouriteItemsContext.Provider value={isInFav}>
			{children}
		</FavouriteItemsContext.Provider>
	);
};

export default FavouriteItemsContextProvider;
export { FavouriteItemsContext };
