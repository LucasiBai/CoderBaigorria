import { useState } from "react";
import ImgSlide from "../ImgSlide/ImgSlide";

import "./ImgContainer.css";

const ImgContainer = ({ imgs, alt }) => {
	const [currentImg, setCurrentImg] = useState({ id: 0, img: imgs[0] });

	const [preview, setPreview] = useState(false);

	return (
		<div className="img-container__box">
			{preview && (
				<div className="img-preview">
					<button onClick={() => setPreview(false)}>X</button>
					<img src={currentImg.img} alt={alt} />
					<div>
						<button>{"<"}</button>
						<button>{">"}</button>
					</div>
				</div>
			)}
			<ImgSlide imgs={imgs} alt={alt} handleMouseOver={setCurrentImg} />
			<div className="main-img__container" onClick={() => setPreview(true)}>
				<img src={currentImg.img} alt={alt} className="main-img" />
			</div>
		</div>
	);
};

export default ImgContainer;
