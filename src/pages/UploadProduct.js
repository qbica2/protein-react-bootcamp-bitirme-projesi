import React, { useState , useContext} from "react";
import ImageUploading from "react-images-uploading";
import { useFormik } from "formik";

import ProductsContext from "../contexts/ProductsContext";
import style from "../styles/upload.module.scss";
import Navigation from "../constants/Navigation";
import UploadIcon from "../constants/icons/UploadIcon";
import CloseIcon from "../constants/icons/CloseIcon";
import { uploadValidations } from "../constants/validation";

function AddProduct() {
	
	const { categories } = useContext(ProductsContext);
	console.log(categories);
	const [file, setFile] = useState([]);

	const onChange = (imageList) => {	
		setFile(imageList);
	};

	const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
		initialValues: {
			name:"",
			description:"",
			category:"",
			brand:"",
			color:"",
			status:"",
			price:"",
			isOfferable:false,
		},
		validationSchema: uploadValidations,
		onSubmit: async () => {
			console.log(values);
		}
	});

	console.log(file);

	return (
		<div className={style.container}>
			<Navigation/>
			<div className={style.content}>
				<form>
					<div className={style.left}>
						<div className={style.title}>Ürün Detayları</div>
						<div className={style.nameGroup}>
							<label>Ürün Adı</label>
							<input 
								type="text" 
								name="name" 
								placeholder="Örnek: Iphone 12 Pro Max" 
								onChange={handleChange} 
								value={values.name} 
								onBlur={handleBlur}/>
							{touched.name && errors.name && <div className={style.error}>{errors.name}</div>}
						</div>
						<div className={style.descriptionGroup}>
							<label>Açıklama</label>
							<textarea 
								type="text" 
								placeholder="Ürün açıklaması giriniz" 
								name="description" 
								onChange={handleChange}
								value={values.description}
								onBlur={handleBlur}/>
						</div>
						<div className={style.topGroup}>
							<div className={style.categoryGroup}>
								<label>Kategori</label>
								<select name="category" onChange={handleChange} onBlur={handleBlur} required>
									<option value="" disabled selected hidden>Kategori seç</option>
									{
										categories.map((category) => (
											<option key={category.id} value={category.name}>{category.name}</option>
										))
									}
									{
										touched.category && errors.category && <div className={style.error}>{errors.category}</div>
									}
								</select>
							</div>
							<div className={style.brandGroup}>
								<label>Marka</label>
								<select>
									<option value="" disabled selected hidden>Marka seç</option>
									<option>Apple</option>
									<option>Samsung</option>
									<option>Xiaomi</option>
								</select>
							</div>
						</div>
						<div className={style.bottomGroup}>
							<div className={style.colorGroup}>
								<label>Renk</label>
								<select>
									<option value="" disabled selected hidden>Renk seç</option>
									<option>Kırmızı</option>
									<option>Sarı</option>
									<option>Yeşil</option>
								</select>	
							</div>
							<div className={style.usingGroup}>
								<label>Kullanım Durumu</label>
								<select >
									<option value="" disabled defaultValue hidden>Kullanım durumu seç</option>
									
									<option>Çok kullanılan</option>
									<option>Kullanılıyor</option>
									<option>Çok kullanılmıyor</option>
								</select>
							</div>
						</div>
						<div className={style.priceGroup}>
							<label>Fiyat</label>
							<input type="number" placeholder="Bir Fiyat Girin"/>
						</div>
						<div className={style.offerGroup}>
							<label>Teklif opsiyonu</label>
							<label className={style.switch}>
								<input type="checkbox" />
								<span className={style.slider}></span>
							</label>
						</div>
					</div>
					<div className={style.right}>
						<div className={style.title}>Ürün Görseli</div>

						<ImageUploading
							acceptType={["png", "jpg", "jpeg"]}
							value={file}
							onChange={onChange}
							maxFileSize={400000}
							dataURLKey="data_url">
							{({
								imageList,
								onImageUpload,
								onImageRemove,
								dragProps,
								errors
							}) => (
								<> 
									{
										imageList.length === 0  && 
										<div className={style.imageGroup} onClick={onImageUpload} {...dragProps}>
											<UploadIcon />
											<span>Sürükleyip bırakarak yükle veya</span>
											<input type="button" value="Resim Seç" />
											<p>PNG ve JPEG Dosya boyutu: max. 100kb</p>
										</div> 
									}
									{
										imageList.length === 1 && 	imageList.map((image, index) => (
											<div key={index} className={style.image}>
												<img src={image.data_url} alt=""/>
												<div className={style.remove} onClick={() => onImageRemove(index)}><CloseIcon color="#fff"/></div>
											</div>))
									}
									{
										errors ? <span>{errors}</span> : null
									}
								</>
								
							)}

						</ImageUploading>

					</div>
				</form>	
				<button onClick={handleSubmit}> Kaydet</button>
			</div>
		</div>
	);
}

export default AddProduct;