import { Link } from "react-router-dom";

import "./FullCarouselImg.css";

const FullCarouselImg = ({ images, reference }) => {
	return (
		<article className="full-carousel--img-box" ref={reference}>
			{images &&
				images.map((item) => (
					<Link to={item.url} key={item.name}>
						<span
							style={{
								height: "100%",
							}}
						>
							<img src={item.img} alt={item.name} />
						</span>
					</Link>
				))}
		</article>
	);
};

export default FullCarouselImg;
