import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className="list--box">
			<h1>¿Estás Perdido?</h1>
			<Link to="/" style={{ color: "grey" }}>
				Volver al inicio
			</Link>
		</div>
	);
};

export default NotFoundPage;
