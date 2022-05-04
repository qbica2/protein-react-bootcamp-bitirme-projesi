/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "../styles/offermodal.module.scss";
import CloseIcon from "../constants/icons/CloseIcon";
import CheckedIcon from "../constants/icons/CheckedIcon";
import UncheckedIcon from "../constants/icons/UncheckedIcon";


function OfferModal({ closeModal, src}) {

	const [checked20, setChecked20] = useState(false);
	const [checked30, setChecked30] = useState(false);
	const [checked40, setChecked40] = useState(false);

	const handleOfferClick = (value) => {
		setChecked20(false);
		setChecked30(false);
		setChecked40(false);
		if (value.type === 20) {
			setChecked20(!checked20);
		} else if (value.type === 30) {
			setChecked30(!checked30);
		} else if (value.type === 40) {
			setChecked40(!checked40);
		}
	};
	
	return (
		<div className={style.modal}> 
			<div className={style.content}>
				<header>
					<div className={style.title}>
						Teklif Ver
					</div>
					<div className={style.close} onClick={closeModal}>
						<CloseIcon />
					</div>
				</header>
				<div className={style.product}>
					<div className={style.left}>
						<div className={style.image}>
							<img src={src} alt="product"/>
						</div>
						<div className={style.title}>
						Çikolata
						</div>
					</div>
					<div className={style.right}>
						<div className={style.price}>
							320 TL
						</div>
					</div>
				</div>
				<form>
					{/* maplediğim zaman re render limit sorununa takılıyordu */}
					<div className={style.option} onClick={()=>handleOfferClick({type: 20})}>
						{
							checked20 ? <CheckedIcon /> : <UncheckedIcon />
						}
						%20'si Kadar Teklif Ver
					</div>
					<div className={style.option} onClick={()=>handleOfferClick({type: 30})}>
						{
							checked30 ? <CheckedIcon /> : <UncheckedIcon />
						}
						%30'si Kadar Teklif Ver
					</div>
					<div className={style.option} onClick={()=>handleOfferClick({type: 40})}>
						{
							checked40 ? <CheckedIcon /> : <UncheckedIcon />
						}
						%40'si Kadar Teklif Ver
					</div>
					<div className={style.formGroup}>
						<input type="number" id="price" placeholder="Teklif Belirle" />
						<label htmlFor="price">TL</label>
					</div>
					<button>Onayla</button>
				</form>
			</div>	
		</div>
	);
}

OfferModal.propTypes = {
	closeModal: PropTypes.func.isRequired,
	src: PropTypes.string.isRequired
};

export default OfferModal;