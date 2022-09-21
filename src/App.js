import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
	return (
		<div className="App">
			<header>
				<NavBar brandImg="https://lirp.cdn-website.com/627ffa0a/dms3rep/multi/opt/2317086-logo-01-8f14e-237w.jpg" />
			</header>
			<main>
				{/* <ItemListContainer greeting="Productos" /> */}
				<ItemDetailContainer />
			</main>
		</div>
	);
}

export default App;
