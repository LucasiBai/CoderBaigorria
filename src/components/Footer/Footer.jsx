import {
	faTwitter,
	faWhatsapp,
	faLinkedin,
	faFacebook,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";
import SocialMediaButtons from "../SocialMediaButtons/SocialMediaButtons";
import ContactForm from "../ContactForm/ContactForm";

const socialmedia = [
	{ brand: faWhatsapp, url: "https://www.whatsapp.com" },
	{ brand: faFacebook, url: "https://www.facebook.com/lacandela.iluminacion" },
	{ brand: faLinkedin, url: "https://www.linkedin.com" },
	{ brand: faTwitter, url: "https://www.twitter.com" },
	{ brand: faYoutube, url: "https://www.youtube.com" },
];

const Footer = ({ brand, address, backColor }) => {
	return (
		<footer
			style={{
				display: "flex",
				backgroundColor: backColor,
				justifyContent: "center",
				marginTop: "auto",
			}}
		>
			<div
				style={{
					width: "1200px",
					display: "flex",
					justifyContent: "space-around",
					alignItems: "center",
				}}
			>
				<ContactForm />
				<hr />
				<div className="foo--information">
					<h3>Nuestras Redes</h3>
					<SocialMediaButtons socialmedia={socialmedia} />
					<h5>2022© {brand}, todos los derechos reservados</h5>
					<h5>{address}</h5>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
