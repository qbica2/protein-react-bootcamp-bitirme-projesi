import React, {useState, useContext , useEffect} from "react";
import ImageUploading from "react-images-uploading";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import ProductsContext from "../contexts/ProductsContext";
import AuthContext from "../contexts/AuthContext";
import style from "../styles/upload.module.scss";
import Navigation from "../constants/Navigation";
import UploadIcon from "../constants/icons/UploadIcon";
import CloseIcon from "../constants/icons/CloseIcon";
import { uploadValidations } from "../constants/validation";

function AddProduct() {
	
	const {auth} = useContext(AuthContext);
	const { categories, brands, getBrands, colors, getColors, usingStatus, getUsingStatus, handleUploadProduct } = useContext(ProductsContext);

	const [file, setFile] = useState([]);
	const [image, setImage] = useState([]);
	// const onUpload = (e) => {
	// 	console.log(e.target.files[0]);
	// 	setFile(e.target.files[0]);
	// };


	const onChange = (imageList) => {
		console.log("onChange", imageList);
		// setFile(imageList[0].file);
		setFile(imageList);
		setImage(imageList[0].file);
	};

	useEffect(() => {
		getBrands();
		getColors();
		getUsingStatus();
	},[]);



	const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
		initialValues: {
			title:"",
			description:"",
			category:0,
			brand:"",
			color:"",
			status:"",
			price:"",
			isOfferable:false,
		},
		validationSchema: uploadValidations,
		onSubmit: async (values) => {
			console.log("values", values);
			console.log("image", image);
			const data = {
				name: values.title,
				description: values.description,
				category: Number(values.category),
				brand: values.brand,
				color: values.color,
				status: values.status,
				price: values.price,
				isOfferable: values.isOfferable,
				isSold:false,
				offers:[],
				users_permissions_user:auth.id,
				published_at: new Date(),
				created_at: new Date(),
				updated_at: new Date(),
				
			
			};
			const formData = new FormData();
			console.log("file", file);
			console.log(file[0].file);
			formData.append("files.image",image);
			formData.append("data", JSON.stringify(data));
			
			

		
			
			const isUploaded = await handleUploadProduct(formData);

			if(isUploaded) {
				toast.success("Ürün başarıyla eklendi.");
			}

		}
	});


	return (
		<div className={style.container}>
			<Navigation/>
			<div className={style.content}>
				<form>
					<div className={style.left}>
						<div className={style.name}>Ürün Detayları</div>
						<div className={style.nameGroup}>
							<label>Ürün Adı</label>
							<input 
								className={touched.title && errors.title ? `${style.errors}` : ""}
								type="text" 
								name="title" 
								placeholder="Örnek: Iphone 12 Pro Max" 
								onChange={handleChange} 
								value={values.title} 
								onBlur={handleBlur}/>
							{touched.title && errors.title && <div className={style.error}>{errors.title}</div>}
						</div>
						<div className={style.descriptionGroup}>
							<label>Açıklama</label>
							<textarea 
								className={touched.description && errors.description ? `${style.errors}` : ""}
								type="text" 
								placeholder="Ürün açıklaması giriniz" 
								name="description" 
								onChange={handleChange}
								value={values.description}
								onBlur={handleBlur}/>
							{touched.description && errors.description && <div className={style.error}>{errors.description}</div>}
						</div>
						<div className={style.topGroup}>
							<div className={style.categoryGroup}>
								<label>Kategori</label>
								<select name="category" onChange={handleChange} onBlur={handleBlur} required className={touched.category && errors.category ? `${style.errors}` : ""}>
									<option value={0} disabled selected hidden>Kategori seç</option>
									{
										categories.map((category) => (
											<option key={category.id} value={Number(category.id)}>{category.name}</option>
										))
									}
								</select>
								{
									touched.category && errors.category && <div className={style.error}>{errors.category}</div>
								}
							</div>
							<div className={style.brandGroup}>
								<label>Marka</label>
								<select name="brand" onChange={handleChange} onBlur={handleBlur}>
									<option value="" disabled selected hidden>Marka seç</option>
									{
										brands.map((brand) => (
											<option key={brand.id} value={brand.name}>{brand.name}</option>
										))
									}
								</select>
							</div>
						</div>
						<div className={style.bottomGroup}>
							<div className={style.colorGroup}>
								<label>Renk</label>
								<select name="color" onChange={handleChange} onBlur={handleBlur}>
									<option value="" disabled selected hidden>Renk seç</option>
									{
										colors.map((color) => (
											<option key={color.id} value={color.name}>{color.name}</option>
										))
									}
								</select>	
							</div>
							<div className={style.usingGroup}>
								<label>Kullanım Durumu</label>
								<select name="status" onChange={handleChange} onBlur={handleBlur} className={touched.status && errors.status ? `${style.errors}` : ""}>
									<option value="" disabled selected hidden>Kullanım durumu seç</option>
									
									{
										usingStatus.map((status) => (
											<option key={status.id} value={status.name}>{status.name}</option>
										))
									}
								</select>
								{
									touched.status && errors.status && <div className={style.error}>{errors.status}</div>
								}
							</div>
						</div>
						<div className={style.priceGroup}>
							<label>Fiyat</label>
							<input 
								className={touched.price && errors.price ? `${style.errors}` : ""}
								type="number" 
								placeholder="Bir Fiyat Girin"
								name="price"
								onChange={handleChange}
								value={values.price}
								onBlur={handleBlur}/>
							{touched.price && errors.price && <div className={style.error}>{errors.price}</div>}
						</div>
						<div className={style.offerGroup}>
							<label>Teklif opsiyonu</label>
							<label className={style.switch}>
								<input type="checkbox" onChange={handleChange} onBlur={handleBlur} name="isOfferable"/>
								<span className={style.slider}></span>
							</label>
						</div>
					</div>
					<div className={style.right}>
						<div className={style.title}>Ürün Görseli</div>

						<ImageUploading
							acceptType={["png", "jpg", "jpeg"]}
							value={file}
							name="image"
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
				<button type="submit" onClick={handleSubmit}> Kaydet</button>
			</div>
			<ToastContainer hideProgressBar={true} autoClose={4000} pauseOnHover={false} closeOnClick closeButton={false} theme="colored" />
		</div>
	);
}

export default AddProduct;