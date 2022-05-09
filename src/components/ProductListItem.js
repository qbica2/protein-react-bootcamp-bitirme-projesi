import React, { useRef, useEffect ,useContext}from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import AuthContext from "../contexts/AuthContext";
import ProductsContext from "../contexts/ProductsContext";
import style from "../styles/productListItem.module.scss";

function ProductListItem( {brand, color, image, price, isLast, id}) {
	
	const imgRef = useRef();
	const { setPage, hasMore, getProduct } = useContext(ProductsContext);
	const { auth } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {

		if(!imgRef?.current || !hasMore) return;

		const observer = new IntersectionObserver(([entry]) => {
		
			if(isLast && entry.isIntersecting ){
				console.log("burdasın");
				setPage(x => x + 1);
				console.log(entry.target);
				observer.unobserve(imgRef.current);
			}

		});
		observer.observe(imgRef.current);


		return () =>  {
			if(imgRef?.current){
				observer.unobserve(imgRef.current);
			}
		};
			
	}, [imgRef,isLast]);

	const handleGetDetail = () => {
		if(!auth.isAuthenticated){
			toast.error("Lütfen giriş yapınız");
			return;
		}
		getProduct(id);
		navigate(`/product/${id}`);
	};


	return (
		<div className={style.container} onClick={handleGetDetail} >
			<div className={style.image} ref={imgRef}>
				<img src={image} alt="resim"/>
			</div>
			<div className={style.info}>
				<div className={style.brand}>
					{brand}
				</div>
				<div className={style.color}>
					<span>Renk: </span>
					{color}
				</div>
			</div>
			<div className={style.price}> 
				{price} TL
			</div>
		</div>
	);
}

ProductListItem.propTypes = {
	brand: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	isLast: PropTypes.bool,
	id: PropTypes.number.isRequired
};

export default ProductListItem;