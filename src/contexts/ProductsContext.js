/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getAllCategories } from "../services/productsService";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
	
	const [searchParams,setSearchParams] = useSearchParams();

	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState( Number(searchParams.get("category")) || 1 );


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




	const values={
		categories,
		selectedCategory,
		setSelectedCategory,
		setSearchParams
	};

	return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>;
};

export default ProductsContext;