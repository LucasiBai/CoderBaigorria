import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import { MemoryRouter as Router } from "react-router-dom";

import Card from "./Card";

test("Renders content", () => {
	const itemMock = {
		id: 4,
		title: "Cortadora de cesped",
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_623012-MLA44237181037_122020-O.webp",
		],
		description: "descripción 1234",
		price: 49302,
	};

	render(
		<Router>
			<Card
				id={itemMock.id}
				title={itemMock.title}
				img={itemMock.img}
				description={itemMock.description}
				price={itemMock.price}
			/>
		</Router>,
	);

	const img = screen.getByRole("img");
	expect(img).toHaveAttribute("src", itemMock.img[0]);

	const price = screen.getByText("$ 49,302");
	expect(price).toBeInTheDocument();
});

test("Card redirect", () => {
	const itemMock = {
		id: 4,
		title: "Cortadora de cesped",
		img: "https://http2.mlstatic.com/D_NQ_NP_623012-MLA44237181037_122020-O.webp",
		description: "descripción 1234",
		price: 49302,
	};

	render(
		<Router>
			<Card
				id={itemMock.id}
				title={itemMock.title}
				img={itemMock.img}
				description={itemMock.description}
				price={itemMock.price}
			/>
		</Router>,
	);

	const clickingCard = screen.getByRole("link");
	expect(clickingCard).toHaveAttribute("href", "/item/4");
});

// test("Hover render description", () => {
// 	userEvent.hover();
// });
