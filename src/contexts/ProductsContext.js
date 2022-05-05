/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getAllCategories, getAllProducts, getProductsByCategory, getProductsCount, getProductById } from "../services/productsService";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
	
	const [searchParams,setSearchParams] = useSearchParams();

	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState( Number(searchParams.get("category")) || 0 );

	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(0);
	const [hasMore, setHasMore] = useState(true);
	const [detail, setDetail] = useState({});


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

				const response = await getAllProducts(page);

				if (response.status === 200) {
					console.log("page",page,"response",response.data);
					setProducts([...products, ...response.data]);
				}

			} else  if(selectedCategory < 14){
				const response = await getProductsByCategory(selectedCategory,page);

				if(response.status === 200){
					console.log("getProductsByCategory response", response);
					setProducts([...products, ...response.data]);
				}

			} else if (selectedCategory === 14){

				const response = await getProductsByCategory(selectedCategory,page);
				const res2 = await getProductsByCategory(selectedCategory+1,page);
				const res3 = await getProductsByCategory(selectedCategory+2,page);
				if(response.status === 200 && res2.status === 200 && res3.status === 200){
					console.log("getProductsByCategory response", response);
					setProducts([...products,...response.data, ...res2.data, ...res3.data]);
				}

			}
		};
		getProducts();
	}, [selectedCategory,page]);

	useEffect(() => {
		const getCount = async () => {
			const response = await getProductsCount();
			console.log("getProductsCount response", response);
			if(Number(response.data) - (page +1) * 15 > 0){
				setHasMore(true);
			} else {
				setHasMore(false);
			}
		};
		getCount();
	}, [page]);

	const getProduct = async (id) => {
		const response = await getProductById(id);
		console.log("getProductById response", response);
		if(response.status === 200){
			setDetail(response.data);
		}
		
	};



	const values={
		categories,
		selectedCategory,
		setSelectedCategory,
		setSearchParams,
		products,
		setProducts,
		setPage,
		hasMore,
		getProduct,
		detail,
	};

	return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>;
};

export default ProductsContext;