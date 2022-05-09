import React, { useContext } from "react";
import ProductsContext from "../contexts/ProductsContext";
import ProductListItem from "./ProductListItem";
import style from "../styles/productList.module.scss";

function ProductList() {

	const { products } = useContext(ProductsContext);
	const photoBaseUrl = "https://bootcamp.akbolat.net/";
	
	return (
		<div className={style.productList}>
			{
				products.map((product,index) => (
					<ProductListItem key={product.id} brand={product.brand || ""} color={product.color || ""} image={product.image ?  photoBaseUrl + product.image.url : "resimsiz.jpg" } price={product.price} isLast = { index == products.length - 1 ? true : false} id={product.id}/>
				))
			}
		</div>
	);
}

export default ProductList;