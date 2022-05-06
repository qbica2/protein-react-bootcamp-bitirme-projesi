import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Landing from "../pages/Landing";
import Detail from "../pages/Detail";
import Account from "../pages/Account";

function Rooter  () {
	return(
		<Routes>
			<Route path="/" element={<Landing />} />	
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/product/:id" element={<Detail />} />
			<Route path="/account" element={<Account />} />
		</Routes>
	);
}

export default Rooter;