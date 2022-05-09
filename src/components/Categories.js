import React, { useContext } from "react";

import ProductsContext from "../contexts/ProductsContext";
import style from "../styles/categories.module.scss";

function Categories() {

	const { categories, selectedCategory, setSelectedCategory, setSearchParams, setPage, setProducts } = useContext(ProductsContext);

	// Teslim tarihinden sonra, deploymenttaki hataları düzeltmek adına yaptığım bu değişikleri yorum satırında bırakıyorum.
	// const sliderRef = useRef();

	// useEffect(() => {

	// 	setTimeout(() => {
	// 		slide(selectedCategory, sliderRef);
	// 	}, 4000);

	// },[selectedCategory]);

	const handleSelectCategory = ( category ) => {
		setProducts([]);
		// slide(category,ref);	
		setSelectedCategory(category);
		setSearchParams({category:category});
		setPage(0);
	};

	return (
		<div className={style.container}>
			<div className={style.categories}>
				<div className={style.category}>
					<span onClick={(e)=>handleSelectCategory(Number(e.target.id))} id={0} 
						className={`${selectedCategory==0 ? style.selected: ""}`}>Hepsi</span>
				</div>
				{
					categories.slice(0,13).map((category) => (
						<div key={category.id} className={style.category} id={category.id} >
							<span onClick={()=>handleSelectCategory(category.id)} className={`${category.id===selectedCategory? style.selected: ""}`}>{category.name}</span>
						</div>
					))
				}
				<div className={style.category}>
					<span onClick={(e)=>handleSelectCategory(Number(e.target.id))} id={14} 
						className={`${selectedCategory==14 ? style.selected: ""}`}>Diğer</span>
				</div>
			</div>
			<div className={style.sliderContainer}>
				{/* <div className={style.slider}></div> */}
			</div>
		</div>
	);
}

export default Categories;