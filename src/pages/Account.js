import React, { useContext,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthContext from "../contexts/AuthContext";
import OfferContext from "../contexts/OfferContext";
import BuyModalContext from "../contexts/BuyModalContext";
import ProductsContext from "../contexts/ProductsContext";
import style from "../styles/account.module.scss";
import Navigation from "../constants/Navigation";
import AccountIcon from "../constants/icons/AccountIcon";
import Offer from "../components/Offer";
import MyProduct from "../components/MyProduct";
import BuyModal from "../components/BuyModal";

function Account() {

	const { auth } = useContext(AuthContext);
	const { handleGetOffers, submittedOffers } = useContext(OfferContext);
	const { isBuyModalOpen } = useContext(BuyModalContext);
	const { handleGetMyProducts, myProducts  } = useContext(ProductsContext);
	const navigate = useNavigate();

	const [selectedTab,setSelectedTab] = useState(0);
	console.log(myProducts);
	useEffect(() => {
		if(!auth.isAuthenticated) {
			navigate("/login");
		}	
	},[]);

	useEffect(() => {
		if(selectedTab === 0){
			console.log("selectedTab === 0");
			handleGetMyProducts(auth.id);
		}else if(selectedTab === 1){
			console.log("selectedTab === 1");
			handleGetOffers(auth.id);
		}
	},[selectedTab]);

	const handleSelectTab = (value) => {
		if(value.type ===0){
			setSelectedTab(0);
		}else if(value.type ===1){
			setSelectedTab(1);
		}
	};

	return (
		<div className={style.account}>
			<Navigation/>
			<header>
				<AccountIcon />
				<span>{auth.user}</span>
			</header>
			<div className={style.offers}>
				<div className={style.tabs}>
					<div onClick={()=>handleSelectTab({type:0})} className={`${style.tab && selectedTab === 0 ? style.active : ""}`}>
						Teklif Aldıklarım
					</div>
					<div onClick={()=>handleSelectTab({type:1})} className={`${style.tab && selectedTab === 1 ? style.active : ""}`}>
						Teklif Verdiklerim
					</div>
				</div>
				<div className={style.offerList}>
					{
						selectedTab === 0 && myProducts.map((item)=>(
							item.offers.map((offer)=>(
								<MyProduct key={offer.id} price={offer.offerPrice} image={item.image?.url} title={item.name} status={offer.isStatus} productId={item.id} authId={auth.id} offerId={offer.id} /> 
							))
						))
					}
					{
						selectedTab === 1 && submittedOffers.map((item) =>(
							<Offer key={item.id} image={item.product?.image?.url} title={item.product?.name} offeredPrice={item.offerPrice} status={item.isStatus} productId={item.product?.id}/>
						))	
					}
				</div>
			</div>
			{
				isBuyModalOpen && <BuyModal />
			}
			<ToastContainer hideProgressBar={true} autoClose={4000} pauseOnHover={false} closeOnClick closeButton={false} theme="colored" />
		</div>
	);
}

export default Account;