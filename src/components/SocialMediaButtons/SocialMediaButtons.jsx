import CustomButton from "../CustomButton/CustomButton";

import "./SocialMediaButtons.css";

const SocialMediaButtons = ({ socialmedia }) => {
	return (
		<span className="foo--buttons">
			{socialmedia.map((item) => (
				<a href={item.url} key={item.url} rel="noreferrer" target="_blank">
					<CustomButton
						icon={item.brand}
						style={{
							minWidth: 47,
							minHeight: 47,
							fontSize: 26,
							padding: 0,
						}}
					/>
				</a>
			))}
		</span>
	);
};

export default SocialMediaButtons;
