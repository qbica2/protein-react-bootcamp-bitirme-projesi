import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import AddIcon from "../constants/icons/AddIcon";
import AvatarIcon from "../constants/icons/AvatarIcon";
import style from "../styles/navigation.module.scss";

function Navigation() {
	const navigate = useNavigate();
	return (
		<nav>
			<div className={style.navbar}>
				<div className={style.logo}>
					<Logo width= {129} height= {42}/>
				</div>
				<div className={style.links}>
					<a onClick={()=>navigate("/upload")}> <AddIcon width={13} height={13} color="#4B9CE2"/><span className={style.mini}>Ürün Ekle</span></a>
					<a onClick={()=>navigate("/account")}> <AvatarIcon width={13} height={13} color="#4B9CE2"/> <span>Hesabım</span></a>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;