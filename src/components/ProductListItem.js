import React, { useRef, useEffect ,useContext}from "react";
import PropTypes from "prop-types";
import style from "../styles/productListItem.module.scss";
import ProductsContext from "../contexts/ProductsContext";

function ProductListItem( {brand, color, image, price, isLast}) {
	
	const imgRef = useRef();
	const { setPage, hasMore } = useContext(ProductsContext);

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


	return (
		<div className={style.container} >
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
	isLast: PropTypes.bool
};

export default ProductListItem;