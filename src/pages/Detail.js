import React from "react";

import style from "../styles/detail.module.scss";
import Logo from "../constants/Logo";
import AddIcon from "../constants/icons/AddIcon";
import AvatarIcon from "../constants/icons/AvatarIcon";

function Detail() {
	return (
		<div className={style.detail}>
			<nav>
				<div className={style.navbar}>
					<div className={style.logo}>
						<Logo width= {129} height= {42}/>
					</div>
					<div className={style.links}>
						<a> <AddIcon width={13} height={13} color="#4B9CE2"/><span>Ürün Ekle</span></a>
						<a> <AvatarIcon width={13} height={13} color="#4B9CE2"/> <span>Hesabım</span></a>
					</div>
				</div>
			</nav>
			<div className={style.content}>
				<div className={style.image}>
					<img src="" alt=""/>
				</div>
				<div className={style.info}>
					<div className={style.title}>
						Beli Uzun Trençkot Kareli
					</div>
					<div className={style.properties}>
						<div className={style.left}>
							Marka:
						</div>
						<div className={style.right}>
							Lusi Viton
						</div>
					</div>
					<div className={style.properties}>
						<div className={style.left}>
							Renk:
						</div>
						<div className={style.right}>
							Bej rengi
						</div>
					</div>
					<div className={style.properties}>
						<div className={style.left}>
							Kullanım Durumu:
						</div>
						<div className={style.right}>
							Az Kullanılmış
						</div>
					</div>
					<div className={style.price}>
					319,90 TL
					</div>
					<div className={style.buttonCon}>
						<button className={style.buy}>Satın Al</button>
						<button className={style.offer}>Teklif Ver</button>
					</div>
					<div className={style.description}>
						<span>Açıklama</span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Detail;