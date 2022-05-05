import React from "react";
import PropTypes from "prop-types";
import style from "../styles/buymodal.module.scss";

function BuyModal( { closeModal, buyProduct}) {

	return (
		<div className={style.modal}>
			<div className={style.content}>
				<div className={style.title}>
					Satın Al
				</div>
				<div className={style.description}>
					Satın Almak istiyor musunuz?
				</div>
				<div className={style.buttonCon}>
					<button onClick={closeModal} className={style.cancel}>Vazgeç</button>
					<button onClick={buyProduct} className={style.confirm}>Satın Al</button>
				</div>
			</div>
		</div>
	);
}

BuyModal.propTypes = {
	closeModal: PropTypes.func.isRequired,
	buyProduct: PropTypes.func.isRequired,
};

export default BuyModal;