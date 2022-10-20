import { Link } from "react-router-dom";

import "./FullCarouselImg.css";

const FullCarouselImg = ({ images }) => {
	return (
		<article>
			{images &&
				images.map((item) => (
					<Link to={item.url}>
						<span
							style={{
								backgroundColor: "red",
								objectFit: "cover",
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
