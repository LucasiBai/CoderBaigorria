import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";

import { MemoryRouter as Router } from "react-router-dom";

import Card from "./Card";

// SetUp
const itemMock = {
	id: 4,
	title: "Cortadora de cesped",
	img: [
		"https://http2.mlstatic.com/D_NQ_NP_623012-MLA44237181037_122020-O.webp",
	],
	description: "descripción 1234",
	price: 49302,
};

const itemLongDescriptionMock = {
	...itemMock,
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
};

const cardMock = (item) => (
	<Router>
		<Card
			id={item.id}
			title={item.title}
			img={item.img}
			description={item.description}
			price={item.price}
		/>
	</Router>
);

// Tests
test("Renders content", () => {
	render(cardMock(itemMock));

	const img = screen.getByRole("img");
	expect(img).toHaveAttribute("src", itemMock.img[0]);

	const price = screen.getByText("$ 49,302");
	expect(price).toBeInTheDocument();
});

test("Card redirect", () => {
	render(cardMock(itemMock));

	const clickingCard = screen.getByRole("link");
	expect(clickingCard).toHaveAttribute("href", "/item/4");
});

test("Hover render description", () => {
	render(cardMock(itemMock));

	const article = screen.getByRole("article");
	fireEvent.mouseOver(article);

	const description = screen.getByText(itemMock.description);
	expect(description).toBeInTheDocument();
});

test("Hover description cut", () => {
	render(cardMock(itemLongDescriptionMock));

	const article = screen.getByRole("article");
	fireEvent.mouseOver(article);

	const description = screen.getByText(
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...",
	);
	expect(description).toBeInTheDocument();
});
