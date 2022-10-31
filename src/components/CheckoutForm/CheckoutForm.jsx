import { useState, useContext, useEffect } from "react";

import { cartContext } from "../../contexts/cartContext";

import LabelInputForm from "../LabelInputForm/LabelInputForm";

import "./CheckoutForm.css";

const CheckoutForm = ({ onSubmit }) => {
	const [formData, setFormData] = useState({
		firstName: "Lucas Ignacio",
		lastName: "Baigorria",
		phone: "351 123 4567",
		email: "luquillo@gmail.com",
	});

	const { setBuyerData } = useContext(cartContext);

	const updateFormData = (e) => {
		const { name: imputName, value: newValue } = e.target;

		const updatedData = { ...formData };
		updatedData[imputName] = newValue;

		setFormData(updatedData);
	};

	const submitHandler = () => {
		onSubmit && onSubmit();
	};

	useEffect(() => setBuyerData(formData));

	return (
		<section className="checkout-form">
			<form
				onSubmit={submitHandler}
				style={{ display: "flex", flexDirection: "column" }}
			>
				<LabelInputForm
					type="text"
					name="firstName"
					value={formData.firstName}
					required
					onChange={updateFormData}
				>
					Nombre:
				</LabelInputForm>

				<LabelInputForm
					type="text"
					name="lastName"
					value={formData.lastName}
					required
					onChange={updateFormData}
				>
					Apellido:
				</LabelInputForm>

				<LabelInputForm
					type="text"
					name="phone"
					value={formData.phone}
					required
					onChange={updateFormData}
				>
					Número de teléfono:
				</LabelInputForm>

				<LabelInputForm
					type="text"
					name="email"
					value={formData.email}
					required={true}
					onChange={updateFormData}
				>
					Email:
				</LabelInputForm>

				<button type="submit">Finalizar compra</button>
			</form>
		</section>
	);
};

export default CheckoutForm;
