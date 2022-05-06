import React from "react";
import style from "../styles/offer.module.scss";

function Offer() {
	return (
		<div className={style.container}>
			<div className={style.left}>
				<div className={style.image}>

				</div>
				<div className={style.info}>
					<div className={style.title}>Beli Uzun Trençkot Kareli</div>
					<div className={style.price}>
						Alınan Teklif: <span>119.90 TL</span>
					</div>
				</div>
			</div>
			<div className={style.right}>

			</div>
		</div>
	);
}

export default Offer;