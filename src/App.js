import NavBar from "./components/NavBar";

function App() {
	return (
		<div className="App">
			<header>
				<NavBar brandImg="http://woodcba.ml/Assets/Img/iso.png" />
				<img
					src="http://woodcba.ml/Assets/Img/mueble5.jpg"
					style={{ width: "100%", height: "auto" }}
				/>
			</header>
		</div>
	);
}

export default App;
