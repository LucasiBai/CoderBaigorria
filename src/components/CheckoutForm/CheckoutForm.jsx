import { useState, useContext, useEffect } from "react";

import { cartContext } from "../../contexts/cartContext";

const CheckoutForm = ({ onSubmit }) => {
	const [formData, setFormData] = useState({
		firstName: "Lucas",
		lastName: "Bai",
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
		<section>
			<form
				onSubmit={submitHandler}
				onChange={updateFormData}
				style={{ display: "flex", flexDirection: "column" }}
			>
				<input
					type="text"
					name="firstName"
					value={formData.firstName}
					required={true}
				/>
				<input
					type="text"
					name="lastName"
					value={formData.lastName}
					required={true}
				/>
				<input
					type="text"
					name="phone"
					value={formData.phone}
					required={true}
				/>
				<input
					type="text"
					name="email"
					value={formData.email}
					required={true}
				/>
				<input type="submit" value={"Finalizar compra"} />
			</form>
		</section>
	);
};

export default CheckoutForm;
