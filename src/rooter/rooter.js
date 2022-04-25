import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

function Rooter  () {
	return(
		<Routes>
			<Route path="/" element={<h1>Landing</h1>} />	
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
}

export default Rooter;