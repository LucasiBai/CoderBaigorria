const CardDescription = ({ text }) => {
	const cutText = () => {
		let cuttedText = text;
		if (text.length > 60) {
			const letters = text.toLowerCase().split("");
			let cuttedLetters = letters.slice(0, 60);
			cuttedLetters[0] = cuttedLetters[0].toUpperCase();
			cuttedLetters.push("...");
			cuttedText = cuttedLetters.join("");
		}
		return cuttedText;
	};

	return <p className="card--description card--item">{cutText(text)}</p>;
};

export default CardDescription;
