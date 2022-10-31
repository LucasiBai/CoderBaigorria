export default function LabelInputForm({
	children,
	name,
	type,
	required,
	value,
	onChange,
}) {
	return (
		<span style={{ display: "flex", flexDirection: "column" }}>
			<label>{children}</label>
			<input
				type={type}
				name={name}
				value={value}
				required={required}
				onChange={onChange}
			/>
		</span>
	);
}
