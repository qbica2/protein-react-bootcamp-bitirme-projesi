import React, { useContext } from "react";
import BuyModalContext from "../contexts/BuyModalContext";
import style from "../styles/buymodal.module.scss";

function BuyModal() {
	const { handleBuySomething, handleBuyModalClose } = useContext(BuyModalContext);
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
					<button onClick={handleBuyModalClose} className={style.cancel}>Vazgeç</button>
					<button onClick={handleBuySomething} className={style.confirm}>Satın Al</button>
				</div>
			</div>
		</div>
	);
}


export default BuyModal;