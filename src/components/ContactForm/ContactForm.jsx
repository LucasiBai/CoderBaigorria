import { useState } from "react";

import { sendContactData } from "../../services/firestore";

import "./ContactForm.css";

const ContactForm = () => {
	const [contactData, setContactData] = useState({
		text: "",
		email: "",
		message: "",
	});
	const [sended, setSended] = useState(false);

	const handleChange = (e) => {
		const { name: imputName, value: newValue } = e.target;

		const updatedData = { ...contactData };
		updatedData[imputName] = newValue;

		setContactData(updatedData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		sendContactData(contactData);
		setContactData({
			text: "",
			email: "",
			message: "",
		});
		setSended(true);
		setTimeout(() => setSended(false), 5000);
	};

	return (
		<div className="foo--contact">
			<h3>Contacto</h3>
			<form
				style={{ display: "flex", flexDirection: "column" }}
				onSubmit={handleSubmit}
			>
				{sended && (
					<p style={{ color: "#349134", fontSize: 15 }}>
						Mensaje enviado con éxito
					</p>
				)}
				<input
					type="text"
					placeholder="Nombre"
					name="text"
					value={contactData.text}
					onChange={handleChange}
				/>
				<input
					type="email"
					placeholder="Email"
					name="email"
					value={contactData.email}
					onChange={handleChange}
				/>
				<textarea
					cols="30"
					rows="10"
					placeholder="Mensaje"
					name="message"
					value={contactData.message}
					onChange={handleChange}
				/>
				<input type="submit" value="Enviar" className="foo-submit" />
			</form>
		</div>
	);
};

export default ContactForm;
