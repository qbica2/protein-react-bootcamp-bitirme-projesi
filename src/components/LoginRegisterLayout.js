/* eslint-disable react/prop-types */
import React from "react";
import { ToastContainer } from "react-toastify";
import Logo from "../constants/Logo";
import style from "../styles/loginRegisterLayout.module.scss";
import "react-toastify/dist/ReactToastify.css";

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
				<ToastContainer />
			</div>
		</div>
	);
}

export default LoginRegisterLayout;