import React from "react";
import PropTypes from "prop-types";
import style from "../styles/productListItem.module.scss";

function ProductListItem( {brand, color, image, price}) {
	return (
		<div className={style.container}>
			<div className={style.image}>
				<img src={image} alt=""/>
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
	price: PropTypes.number.isRequired
};

export default ProductListItem;