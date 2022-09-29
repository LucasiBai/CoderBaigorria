import "./GhostButton.css";

export default function GhostButton({ text, handleFunction }) {
	return (
		<button className="ghost-button" onClick={handleFunction}>
			{text}
		</button>
	);
}
