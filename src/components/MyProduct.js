import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import style from "../styles/myproduct.module.scss";

import ProductsContext from "../contexts/ProductsContext";

function MyProduct({ price, image , title, status, productId, authId , offerId }) {

	const { handleUpdateMyOffer } = useContext(ProductsContext);
	const photoBaseUrl = "https://bootcamp.akbolat.net/";

	const [isConfirmed, setIsConfirmed] = useState(null);

	const handleClick = async (value) => {
		console.log("Clicked");
		console.log(value.offerId);
		if (value.type ==="confirm") {
			const data = {
				product: productId,
				users_permissions_user: authId,
				offerPrice: price,
				isStatus: true,
				published_at: new Date(),
				created_at: new Date(),
				updated_at: new Date(),
			};
			const isConfirmed = await handleUpdateMyOffer(offerId, data);
			if (isConfirmed) {
				setIsConfirmed(true);
			}
		} else if (value.type ==="declined") {
			const data = {
				product: productId,
				users_permissions_user: authId,
				offerPrice: price,
				isStatus: false,
				published_at: new Date(),
				created_at: new Date(),
				updated_at: new Date(),
			};
			const isDeclined = await handleUpdateMyOffer(offerId, data);
			if (isDeclined) {
				setIsConfirmed(false);
			}
		}
	};

	return (
		<div className={style.container}>
			<div className={style.left}>
				<div className={style.image}> 
					<img src={image ? photoBaseUrl + image : "resimsiz.jpg"}  alt="product" />
				</div>
				<div className={style.info}>
					<div className={style.title}>{title}</div>
					<div className={style.price}>
					Alınan Teklif:  <span> {price} TL</span>
					</div>
				</div>
			</div>
			<div className={style.right}>
				{
					status === null && isConfirmed === null &&
					<div className={style.buttons}>
						<button className={style.confirm} onClick={()=>handleClick({type: "confirm",offerId})}>Onayla</button>
						<button className={style.cancel} onClick={()=>handleClick({type: "declined",offerId})}>Reddet</button>
					</div>
				}
				{
					status === null && isConfirmed!==null && isConfirmed=== true && <div className={style.confirmed}>Onaylandı</div>
				}
				{
					status === null && isConfirmed!==null && isConfirmed===false && <div className={style.declined}>Reddedildi</div>
				}
				{
					status === true && <div className={style.confirmed}>Onaylandı</div>
				}
				{
					status === false && <div className={style.declined}>Reddedildi</div>
				}
			</div>
		</div>
	);
}

MyProduct.propTypes = {
	price: PropTypes.number,
	image: PropTypes.string,
	title: PropTypes.string,
	status: PropTypes.bool,
	productId: PropTypes.number,
	authId: PropTypes.number,
	offerId: PropTypes.number,
};

export default MyProduct;