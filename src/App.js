import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Header";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<ItemListContainer greeting="Productos" />} />
				<Route path="/item/:productId" element={<ItemDetailContainer />} />
				<Route path="/category/:categoryId" element={<ItemListContainer />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
