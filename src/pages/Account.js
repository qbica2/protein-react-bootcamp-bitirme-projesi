import React, { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

import style from "../styles/account.module.scss";
import Navigation from "../constants/Navigation";
import AccountIcon from "../constants/icons/AccountIcon";

function Account() {

	const { auth } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if(!auth.isAuthenticated) {
			navigate("/login");
		}
	},[]);

	return (
		<div className={style.account}>
			<Navigation/>
			<header>
				<AccountIcon />
				<span>aysegul@example.com</span>
			</header>
		</div>
	);
}

export default Account;