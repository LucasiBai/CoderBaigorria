import "./GhostButton.css";

export default function GhostButton({ text, handleFunction, className }) {
	return (
		<button
			className={`ghost-button ${className}`}
			onClick={handleFunction ? handleFunction : ""}
		>
			{text}
		</button>
	);
}
