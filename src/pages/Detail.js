import React, { useContext, useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import style from "../styles/detail.module.scss";
import Logo from "../constants/Logo";
import AddIcon from "../constants/icons/AddIcon";
import AvatarIcon from "../constants/icons/AvatarIcon";

import ProductsContext from "../contexts/ProductsContext";
import OfferContext from "../contexts/OfferContext";
import BuyModal from "../components/BuyModal";
import OfferModal from "../components/OfferModal";

function Detail() {

	const { detail } = useContext(ProductsContext);
	const { submittedOffers,cancelOffer } = useContext(OfferContext);
	console.log(submittedOffers);
	const photoBaseUrl = "https://bootcamp.akbolat.net/";
	const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
	const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

	const [price, setPrice] = useState(0);
	const [offer, setOffer] = useState({});
	console.log("offer",offer);

	useEffect(() => {
		setOffer({});
		submittedOffers.map(offer => {
			if(offer.product.id === detail.id){
				console.log("burdasın");
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
	


	return (
		<div className={style.detail}>
			<nav>
				<div className={style.navbar}>
					<div className={style.logo}>
						<Logo width= {129} height= {42}/>
					</div>
					<div className={style.links}>
						<a> <AddIcon width={13} height={13} color="#4B9CE2"/><span>Ürün Ekle</span></a>
						<a> <AvatarIcon width={13} height={13} color="#4B9CE2"/> <span>Hesabım</span></a>
					</div>
				</div>
			</nav>
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
							offer.offerPrice && <span>Verilen Teklif: <strong>{offer?.offerPrice} TL</strong></span>
						}
					</div>
					<div className={style.buttonCon}>
						<button className={style.buy} onClick={()=>setIsBuyModalOpen(true)}>Satın Al</button>
						{
							detail.isOfferable && !offer.offerPrice && <button onClick={()=>setIsOfferModalOpen(true)} className={style.offer}>Teklif Ver</button> 
						}
						{
							offer.offerPrice && <button onClick={()=>handleCancelOffer()} className={style.offer}>Teklifi Geri Çek</button>
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
				isBuyModalOpen && <BuyModal closeModal={()=>setIsBuyModalOpen(false)}/>
			}
			{
				isOfferModalOpen && <OfferModal closeModal={()=>setIsOfferModalOpen(false)} src={photoBaseUrl+detail?.image?.url} product={detail} price={price} setPrice={setPrice}/>
			}
			<ToastContainer hideProgressBar={true} autoClose={4000} pauseOnHover={false} closeOnClick closeButton={false} theme="colored" />
		</div>
	);
}

export default Detail;