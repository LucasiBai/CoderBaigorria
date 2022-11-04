import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";

import { MemoryRouter as Router } from "react-router-dom";

import Cart from "./Cart";

const itemMock = {
	id: 4,
	title: "Cortadora de cesped",
	img: [
		"https://http2.mlstatic.com/D_NQ_NP_623012-MLA44237181037_122020-O.webp",
	],
	description: "descripción 1234",
	price: 49302,
};

test("Render empty cart", () => {
	// render(<Cart />);
	// const emptyCart = screen.getByText(/El carrito se encuentra vacío/i);
	// expect(emptyCart).toBeInTheDocument();
});
