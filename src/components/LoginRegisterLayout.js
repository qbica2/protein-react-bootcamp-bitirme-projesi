/* eslint-disable react/prop-types */
import React from "react";
import { ToastContainer } from "react-toastify";
import Logo from "../constants/Logo";
import style from "../styles/loginRegisterLayout.module.scss";
import "../styles/toast.scss";

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
				<ToastContainer hideProgressBar={true} autoClose={4000} pauseOnHover={false} closeOnClick closeButton={false} theme="colored" />
			</div>
		</div>
	);
}

export default LoginRegisterLayout;