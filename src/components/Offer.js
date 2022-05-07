import React, { useContext} from "react";
import PropTypes from "prop-types";
import style from "../styles/offer.module.scss";
import BuyModalContext from "../contexts/BuyModalContext";

// eslint-disable-next-line no-unused-vars
function Offer({ image, title, price, offeredPrice, status, tab, productId }) {


	const { handleBuyModalOpen, setProductId, isBuy } = useContext(BuyModalContext);

	const photoBaseUrl = "https://bootcamp.akbolat.net/";

	const handleOpenModal = () => {
		handleBuyModalOpen();
		setProductId(productId);
	};

	return (
		<div className={style.container}>
			<div className={style.left}>
				<div className={style.image}>
					<img src={photoBaseUrl + image} alt="product" />
				</div>
				<div className={style.info}>
					<div className={style.title}>{title}</div>
					<div className={style.price}>
						{tab === 0 ? "Alınan Teklif: " : "Verilen Teklif: "} <span>{offeredPrice} TL</span>
					</div>
				</div>
			</div>
			<div className={style.right}>
				{
					isBuy && status && <div className={style.sold}>Satın Alındı</div>
				}
				{
					!isBuy && status && <button onClick={handleOpenModal}>Satın Al</button>
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
	price: PropTypes.number,
	offeredPrice: PropTypes.number,
	status: PropTypes.bool,
	tab: PropTypes.number,
	productId: PropTypes.number,
};

export default Offer;