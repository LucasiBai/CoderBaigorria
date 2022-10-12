import NavBar from "./NavBar/NavBar";

function Header() {
	return (
		<header
			style={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<NavBar brandImg="https://lirp.cdn-website.com/627ffa0a/dms3rep/multi/opt/2317086-logo-01-8f14e-237w.jpg" />
		</header>
	);
}

export default Header;
