import React, { useContext } from "react";
import style from "../styles/categories.module.scss";

import ProductsContext from "../contexts/ProductsContext";

function Categories() {

	const { categories, selectedCategory, setSelectedCategory } = useContext(ProductsContext);

	const handleSelected = (category) => {
		setSelectedCategory(category);
	};

	return (
		<div className={style.categories}>
			{
				categories.map((category) => (
					<span	span onClick={()=>handleSelected(category.id)} className={`${category.id===selectedCategory? style.selected: ""}`} key={category.id}>{category.name}</span>
				))
			}
		</div>
	);
}

export default Categories;