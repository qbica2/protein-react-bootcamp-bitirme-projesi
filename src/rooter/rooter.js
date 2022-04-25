import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";


function Rooter  () {
	return(
		<Routes>
			<Route path="/" element={<h1>Landing</h1>} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}

export default Rooter;