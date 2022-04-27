import React from "react";
import { useNavigate } from "react-router-dom";


function Landing() {
	const navigate = useNavigate();
	return (
		<div>Landing
			<button onClick={() => navigate("/register")}>register</button>
		</div>
	);
}

export default Landing;