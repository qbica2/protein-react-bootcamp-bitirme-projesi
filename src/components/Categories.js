import React, { useContext,useRef } from "react";
import style from "../styles/categories.module.scss";

import ProductsContext from "../contexts/ProductsContext";
import { slide } from "../utils/slide";

function Categories() {

	const { categories, selectedCategory, setSelectedCategory } = useContext(ProductsContext);
	const sliderRef = useRef();

	const handleSelected = (category,ref) => {

		slide(category,ref);	
		setSelectedCategory(category);
	};

	return (
		<div className={style.container}>
			<div className={style.categories}>
				{
					categories.map((category) => (
						<div key={category.id} className={style.category} id={category.id} >
							<span onClick={()=>handleSelected(category.id,sliderRef)} className={`${category.id===selectedCategory? style.selected: ""}`}>{category.name}</span>
						</div>
					))
				}
			</div>
			<div className={style.sliderContainer}>
				<div ref={sliderRef} className={style.slider}></div>
			</div>
		</div>
	);
}

export default Categories;