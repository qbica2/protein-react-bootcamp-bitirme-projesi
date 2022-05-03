import React from "react";
import PropTypes from "prop-types";
import style from "../styles/offermodal.module.scss";
import CloseIcon from "../constants/icons/CloseIcon";


function OfferModal({ closeModal, src}) {

	const options = [20,30,40];

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
					{
						options.map(option => (
							<div className={style.option} key={option} id={option}>
								<div>icon</div>
								%{option} Kadar Teklif Ver
							</div>	))
					}
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