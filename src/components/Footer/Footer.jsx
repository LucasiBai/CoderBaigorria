import { Link } from "react-router-dom";

import CustomButton from "../CustomButton/CustomButton";

import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

const Footer = ({ brand, address, backColor }) => {
	return (
		<footer
			style={{
				display: "flex",
				backgroundColor: backColor,
				justifyContent: "center",
			}}
		>
			<div
				style={{
					width: "1400px",
					display: "flex",
					justifyContent: "space-around",
					alignItems: "center",
				}}
			>
				<div className="foo--contact">
					<h3>Contacto</h3>
					<form
						action="POST"
						style={{ display: "flex", flexDirection: "column" }}
					>
						<input type="text" placeholder="Nombre" />
						<input type="text" placeholder="Email" />
						<textarea name="" id="" cols="30" rows="10" placeholder="Mensaje" />
						<input type="submit" value="Enviar" />
					</form>
				</div>
				<hr />
				<div className="foo--information">
					<h3>Nuestras Redes</h3>
					<span className="foo--buttons">
						<Link>
							<CustomButton icon={faLink} style={{ padding: "0.7rem" }} />
						</Link>
						<Link>
							<CustomButton icon={faLink} style={{ padding: "0.7rem" }} />
						</Link>
						<Link>
							<CustomButton icon={faLink} style={{ padding: "0.7rem" }} />
						</Link>
						<Link>
							<CustomButton icon={faLink} style={{ padding: "0.7rem" }} />
						</Link>
						<Link>
							<CustomButton icon={faLink} style={{ padding: "0.7rem" }} />
						</Link>
						<Link>
							<CustomButton icon={faLink} style={{ padding: "0.7rem" }} />
						</Link>
					</span>
					<h5>2022© {brand}, todos los derechos reservados</h5>
					<h5>{address}</h5>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
