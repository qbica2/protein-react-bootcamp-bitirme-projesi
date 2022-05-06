import React, { useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import style from "../styles/detail.module.scss";
import Navigation from "../constants/Navigation";

import ProductsContext from "../contexts/ProductsContext";
import OfferContext from "../contexts/OfferContext";
import BuyModal from "../components/BuyModal";
import OfferModal from "../components/OfferModal";

function Detail() {

	const { detail, buyProduct } = useContext(ProductsContext);
	const { submittedOffers,cancelOffer } = useContext(OfferContext);
	
	const photoBaseUrl = "https://bootcamp.akbolat.net/";
	const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
	const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

	const [price, setPrice] = useState(0);
	const [offer, setOffer] = useState({});
	const [isBuy, setIsBuy] = useState(false);
	

	useEffect(() => {
		setOffer({});
		submittedOffers.map(offer => {
			if(offer.product.id === detail.id){
				setOffer(offer);
			}
		});
	}, [submittedOffers,detail]);
			
	const handleCancelOffer =  () => {
		submittedOffers.map(offer => {
			if(offer.product.id === detail.id){
				cancelOffer(offer.id);
				setOffer({});
			}
		});
	};

	const handleBuyProduct = async () => {
		const isSold = await buyProduct(detail.id);
		if(isSold){
			toast.success("Satın Alındı");
			setIsBuyModalOpen(false);
			setIsBuy(true);
		}else{
			toast.error("Satın Alınamadı");
		}
	};

	


	return (
		<div className={style.detail}>
			<Navigation/>
			<div className={style.content}>
				<div className={style.image}>
					<img src={photoBaseUrl+detail?.image?.url} alt="resim"/>
				</div>
				<div className={style.info}>
					<div className={style.title}>
						{detail.name}
					</div>
					<div className={style.properties}>
						<div className={style.left}>
							Marka:
						</div>
						<div className={style.right}>
							{detail.brand}
						</div>
					</div>
					<div className={style.properties}>
						<div className={style.left}>
							Renk:
						</div>
						<div className={style.right}>
							{detail.color}
						</div>
					</div>
					<div className={style.properties}>
						<div className={style.left}>
							Kullanım Durumu:
						</div>
						<div className={style.right}>
							{detail.status}
						</div>
					</div>
					<div className={style.price}>
						{detail.price} TL
						{
							offer.offerPrice && <span>Verilen Teklif : <strong> {offer?.offerPrice} TL</strong></span>
						}
					</div>
					<div className={style.buttonCon}>
						{
							(detail.isSold || isBuy) && <span>Bu ürün Satışta Değil </span>
						}
						{
							!detail.isSold && !isBuy && <button className={style.buy} onClick={()=>setIsBuyModalOpen(true)}>Satın Al</button>
						}
						{
							!detail.isSold && detail.isOfferable && !offer.offerPrice && !isBuy && <button onClick={()=>setIsOfferModalOpen(true)} className={style.offer}>Teklif Ver</button> 
						}
						{
							!detail.isSold && offer.offerPrice && !isBuy && <button onClick={()=>handleCancelOffer()} className={style.offer}>Teklifi Geri Çek</button>
						}
					</div>
					<div className={style.description}>
						<span>Açıklama</span>
						<p>
							{detail.description}
						</p>
					</div>
				</div>
			</div>
			{
				isBuyModalOpen && <BuyModal closeModal={()=>setIsBuyModalOpen(false)} buyProduct={handleBuyProduct}/>
			}
			{
				isOfferModalOpen && <OfferModal closeModal={()=>setIsOfferModalOpen(false)} src={photoBaseUrl+detail?.image?.url} product={detail} price={price} setPrice={setPrice}/>
			}
			<ToastContainer hideProgressBar={true} autoClose={4000} pauseOnHover={false} closeOnClick closeButton={false} theme="colored" />
		</div>
	);
}

export default Detail;