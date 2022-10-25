import "./ImgSlideItem.css";

const ImgSlideItem = ({
	img,
	alt,
	idx,
	selected,
	handleMouseOver,
	handleOnClick,
	rest,
}) => {
	return (
		<button
			className="img-slide__item"
			onMouseOver={() => handleMouseOver(idx)}
			style={
				selected
					? {
							border: "rgb(0, 120, 201) solid 2px",
					  }
					: {}
			}
			onClick={rest ? handleOnClick : null}
		>
			{rest > 0 && <span>+{rest}</span>}
			<img src={img} alt={alt} />
		</button>
	);
};

export default ImgSlideItem;
