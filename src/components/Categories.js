import React, { useContext, useRef, useEffect } from "react";

import style from "../styles/categories.module.scss";
import ProductsContext from "../contexts/ProductsContext";
import { slide } from "../utils/slide";

function Categories() {

	const { categories, selectedCategory, setSelectedCategory, setSearchParams, setPage, setProducts } = useContext(ProductsContext);
	const sliderRef = useRef();

	useEffect(() => {

		setTimeout(() => {
			slide(selectedCategory, sliderRef);
		}, 4000);

	},[]);

	const handleSelectCategory = ( category, ref ) => {
		setProducts([]);
		slide(category,ref);	
		setSelectedCategory(category);
		setSearchParams({category:category});
		setPage(0);
	};

	return (
		<div className={style.container}>
			<div className={style.categories}>
				<div className={style.category}>
					<span onClick={(e)=>handleSelectCategory(Number(e.target.id),sliderRef)} id={0} 
						className={`${selectedCategory==0 ? style.selected: ""}`}>Hepsi</span>
				</div>
				{
					categories.slice(0,13).map((category) => (
						<div key={category.id} className={style.category} id={category.id} >
							<span onClick={()=>handleSelectCategory(category.id,sliderRef)} className={`${category.id===selectedCategory? style.selected: ""}`}>{category.name}</span>
						</div>
					))
				}
				<div className={style.category}>
					<span onClick={(e)=>handleSelectCategory(Number(e.target.id),sliderRef)} id={14} 
						className={`${selectedCategory==14 ? style.selected: ""}`}>Diğer</span>
				</div>
			</div>
			<div className={style.sliderContainer}>
				<div ref={sliderRef} className={style.slider}></div>
			</div>
		</div>
	);
}

export default Categories;