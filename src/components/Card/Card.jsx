import { useState, useEffect, useCallback } from "react";

import { Link } from "react-router-dom";

import { faHeart } from "@fortawesome/free-solid-svg-icons";

import {
	addProductToFavourite,
	deleteFavouriteProduct,
	isInFavourite,
} from "../../services/firestore";

import CardDescription from "../CardDescription/CardDescription";
import CustomButton from "../CustomButton/CustomButton";

import "./Card.css";

export default function Card({ id, title, img, description, price }) {
	const [isInFav, setIsInFav] = useState(false);

	const [overCard, setOverCard] = useState(false);

	const productURL = `/item/${id}`;

	const changeStateFav = () => {
		if (isInFav) {
			setIsInFav(false);
			deleteFavouriteProduct(id);
		} else {
			setIsInFav(true);
			addProductToFavourite(id);
		}
	};

	const checkIfIsInFav = useCallback(async () => {
		const inFav = await isInFavourite(id);
		if (inFav) {
			setIsInFav(true);
		} else {
			setIsInFav(false);
		}
	}, [id]);

	useEffect(() => {
		checkIfIsInFav();
	}, [isInFav, checkIfIsInFav]);

	return (
		<article
			className="card"
			onMouseOver={() => setOverCard(true)}
			onMouseLeave={() => setOverCard(false)}
			style={{ height: overCard && 243 }}
		>
			{(overCard || isInFav) && (
				<CustomButton
					icon={faHeart}
					className={`card-favourite-button ${isInFav && "in-fav-button"}`}
					handleFunction={changeStateFav}
				/>
			)}
			<Link to={productURL}>
				<img src={img[0]} alt={title} className="card--img card--item" />

				<h4 className="card--item card--price">
					$ {new Intl.NumberFormat().format(price)}
				</h4>
				{overCard && <CardDescription text={description} />}
			</Link>
		</article>
	);
}
