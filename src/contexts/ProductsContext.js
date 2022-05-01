/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getAllCategories, getAllProducts, getProductsByCategory } from "../services/productsService";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
	
	const [searchParams,setSearchParams] = useSearchParams();

	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState( Number(searchParams.get("category")) || 0 );

	const [products, setProducts] = useState([]);


	useEffect(() => {
		const getCategories = async () => {
			const response = await getAllCategories();
			console.log("getCategories response", response);

			if (response.status === 200) {
				console.log("200");
				setCategories(response.data);
			}

		};
		getCategories();
	}, []);

	useEffect(() => {
		const getProducts = async () => {

			if(selectedCategory === 0){

				const response = await getAllProducts();
				setProducts(response.data);

			} else  if(selectedCategory < 14){
				const response = await getProductsByCategory(selectedCategory);

				if(response.status === 200){
					console.log("getProductsByCategory response", response);
					setProducts(response.data);
				}

			} else if (selectedCategory === 14){

				const response = await getProductsByCategory(selectedCategory);
				const res2 = await getProductsByCategory(selectedCategory+1);
				const res3 = await getProductsByCategory(selectedCategory+2);
				if(response.status === 200 && res2.status === 200 && res3.status === 200){
					console.log("getProductsByCategory response", response);
					setProducts([...response.data, ...res2.data, ...res3.data]);
				}

			}
		};
		getProducts();
	}, [selectedCategory]);





	const values={
		categories,
		selectedCategory,
		setSelectedCategory,
		setSearchParams,
		products,
	};

	return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>;
};

export default ProductsContext;