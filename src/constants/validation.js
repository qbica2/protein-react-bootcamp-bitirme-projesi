import * as yup from "yup";


const Validations = yup.object().shape({
	email: yup.string().email("Geçerli bir email giriniz").required("Email alanı boş bırakılamaz"),
	password: yup.string()
		.min(8,"Şifre en az 8 karakter olmalıdır")
		.max(20,"Şifre en fazla 20 karakter olmalıdır")
		.required("Şifre alanı zorunludur")
});

export const offerValidations = yup.object().shape({
	offer: yup.number("Lütfen geçerli bir sayı giriniz").positive("Lütfen pozitif bir sayı giriniz")
});

export const uploadValidations = yup.object().shape({
	name: yup.string().required("Ürün adı alanı boş bırakılamaz").max(100,"Ürün adı en fazla 100 karakter olmalıdır"),
	description: yup.string().required("Ürün açıklaması alanı boş bırakılamaz").max(500,"Ürün açıklaması en fazla 500 karakter olmalıdır"),
	category: yup.string().required("Ürün kategorisi alanı boş bırakılamaz"),
	status: yup.string().required("Ürün durumu alanı boş bırakılamaz"),
	price: yup.number().required("Ürün fiyatı alanı boş bırakılamaz").positive("Lütfen pozitif bir sayı giriniz")
});

export default Validations ;