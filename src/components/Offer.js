import React, { useContext} from "react";
import PropTypes from "prop-types";
import style from "../styles/offer.module.scss";
import BuyModalContext from "../contexts/BuyModalContext";


function Offer({ image, title, offeredPrice, status, productId }) {

	const { handleBuyModalOpen, isBuy } = useContext(BuyModalContext);

	const photoBaseUrl = "https://bootcamp.akbolat.net/";


	return (
		<div className={style.container}>
			<div className={style.left}>
				<div className={style.image}> 
					<img src={image ? photoBaseUrl + image : "resimsiz.jpg"}  alt="product" />
				</div>
				<div className={style.info}>
					<div className={style.title}>{title}</div>
					<div className={style.price}>
					Verilen Teklif:  <span>{offeredPrice} TL</span>
					</div>
				</div>
			</div>
			
			<div className={style.right}>
				{
					isBuy && status && <div className={style.sold}>Satın Alındı</div>
				}
				{
					!isBuy && status && <button onClick={()=>handleBuyModalOpen(productId)}>Satın Al</button>
				}
				{
					status === null && <div className={style.pending}> Bekliyor</div> 
				}
				{
					!isBuy && status !==null && status && <div className={style.confirmed}> Onaylandı</div>
				}
				{
					status !==null && !status && <div className={style.declined}>Reddedildi</div>
				}
			</div>
				
		</div>
	);
}

Offer.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	offeredPrice: PropTypes.number,
	status: PropTypes.bool,
	productId: PropTypes.number,
};

export default Offer;