

export const slide = (id, ref) => {

	const width = document.getElementById(id).offsetWidth;
	ref.current.style.width = width + "px";

	let x = 0;
	for (let i = 0; i < id; i++) {
		x = Number(document.getElementById(i).offsetWidth) + x;
	}
	ref.current.style.left = x + "px";
};