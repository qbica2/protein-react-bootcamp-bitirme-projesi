import React, { useContext} from "react";

import style from "../styles/detail.module.scss";
import Logo from "../constants/Logo";
import AddIcon from "../constants/icons/AddIcon";
import AvatarIcon from "../constants/icons/AvatarIcon";

import ProductsContext from "../contexts/ProductsContext";

function Detail() {

	const { detail } = useContext(ProductsContext);
	const photoBaseUrl = "https://bootcamp.akbolat.net/";
	console.log(detail);
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
					<img src={photoBaseUrl+detail?.image?.url} alt="resim"/>
				</div>
				<div className={style.info}>
					<div className={style.title}>
						{detail.name}
					</div>
					<div className={style.properties}>
						<div className={style.left}>
							Marka:
						</div>
						<div className={style.right}>
							{detail.brand}
						</div>
					</div>
					<div className={style.properties}>
						<div className={style.left}>
							Renk:
						</div>
						<div className={style.right}>
							{detail.color}
						</div>
					</div>
					<div className={style.properties}>
						<div className={style.left}>
							Kullanım Durumu:
						</div>
						<div className={style.right}>
							{detail.status}
						</div>
					</div>
					<div className={style.price}>
						{detail.price} TL
					</div>
					<div className={style.buttonCon}>
						<button className={style.buy}>Satın Al</button>
						<button className={style.offer}>Teklif Ver</button>
					</div>
					<div className={style.description}>
						<span>Açıklama</span>
						<p>
							{detail.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Detail;