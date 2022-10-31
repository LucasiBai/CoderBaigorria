import { useState, useEffect } from "react";

const CardDescription = ({ text }) => {
	const [shortedText, setShortedText] = useState("");

	const cutText = () => {
		let cuttedText = text;
		if (text.length > 60) {
			const letters = text.toLowerCase().split("");
			let cuttedLetters = letters.slice(0, 60);
			cuttedLetters[0] = cuttedLetters[0].toUpperCase();
			cuttedLetters.push("...");
			cuttedText = cuttedLetters.join("");
		}
		setShortedText(cuttedText);
	};

	useEffect(() => cutText);

	return <p className="card--description card--item">{shortedText}</p>;
};

export default CardDescription;
