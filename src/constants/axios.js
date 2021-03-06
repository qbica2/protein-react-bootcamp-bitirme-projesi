import axios from "axios";

export const baseURL="https://bootcamp.akbolat.net";

export default axios.create({baseURL});

export const requests = {
	register: "/auth/local/register",
	login: "/auth/local",
	categories: "/categories",
	products: "/products",
	count: "/products/count",
	offers: "/offers",
	brands: "/brands",
	color: "/colors",
	status:"/using-statuses"
};