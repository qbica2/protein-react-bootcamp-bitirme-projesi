import React, { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

import style from "../styles/account.module.scss";
import Navigation from "../constants/Navigation";
import AccountIcon from "../constants/icons/AccountIcon";
import Offer from "../components/Offer";

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
			<div className={style.offers}>
				<div className={style.tabs}>
					<div className={style.tab && style.active}>
						Teklif Aldıklarım
					</div>
					<div className={style.tab}>
						Teklif Verdiklerim
					</div>
				</div>
				<Offer />
				<Offer />
				<Offer />
				<Offer />
				<Offer />
				<Offer />
				<Offer />
			</div>
		</div>
	);
}

export default Account;