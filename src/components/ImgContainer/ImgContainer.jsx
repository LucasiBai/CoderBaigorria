import { useState } from "react";
import ImgPreview from "../ImgPreview/ImgPreview";
import ImgSlide from "../ImgSlide/ImgSlide";

import "./ImgContainer.css";

const ImgContainer = ({ imgs, alt }) => {
	const [currentImg, setCurrentImg] = useState({ id: 0, img: imgs[0] });

	const [preview, setPreview] = useState(false);

	return (
		<div className="img-container__box">
			{preview && (
				<ImgPreview
					imgs={imgs}
					alt={alt}
					handleClosePreview={setPreview}
					currentIdx={currentImg.id}
				/>
			)}
			<ImgSlide
				imgs={imgs}
				alt={alt}
				handleMouseOver={setCurrentImg}
				handleOpenPreview={() => setPreview(true)}
			/>
			<div className="main-img__container" onClick={() => setPreview(true)}>
				<img src={currentImg.img} alt={alt} className="main-img" />
			</div>
		</div>
	);
};

export default ImgContainer;
