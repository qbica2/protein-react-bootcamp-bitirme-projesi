import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Landing from "../pages/Landing";

function Rooter  () {
	return(
		<Routes>
			<Route path="/" element={<Landing />} />	
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
}

export default Rooter;