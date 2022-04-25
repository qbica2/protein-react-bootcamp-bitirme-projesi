import * as yup from "yup";


const Validations = yup.object().shape({
	email: yup.string().email("Geçerli bir email giriniz").required("Email alanı boş bırakılamaz"),
	password: yup.string()
		.min(8,"Şifre en az 8 karakter olmalıdır")
		.max(20,"Şifre en fazla 20 karakter olmalıdır")
		.required("Şifre alanı zorunludur")
});

export default Validations ;