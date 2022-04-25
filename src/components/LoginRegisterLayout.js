/* eslint-disable react/prop-types */
import React from "react";

import Logo from "../constants/Logo";
import style from "../styles/loginRegisterLayout.module.scss";

function LoginRegisterLayout( {children} ) {
	return (
		<div className={style.layoutContainer}> 
			<div className={style.leftSide}></div>
			<div className={style.rightSide}>
				<div className={style.logo}>
					<Logo width= {224} height= {73}/>
				</div>
				<div className={style.form}>
					{children}
				</div>
			</div>
		</div>
	);
}

export default LoginRegisterLayout;