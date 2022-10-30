export default function CarouselDots({ images, currentImgs }) {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				position: "absolute",
				zIndex: 55,
				width: "100%",
				bottom: "2rem",
				pointerEvents: "none",
			}}
		>
			{images.map((item) => (
				<div
					style={
						item.id === currentImgs[1].id
							? {
									backgroundColor: "rgb(13 126 114)",
									padding: 3,
									borderRadius: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									margin: "1px",
							  }
							: {
									margin: "4px",
							  }
					}
				>
					<div
						style={{
							backgroundColor: "aliceblue",
							width: 5,
							height: 5,
							borderRadius: "100%",
						}}
					></div>
				</div>
			))}
		</div>
	);
}
