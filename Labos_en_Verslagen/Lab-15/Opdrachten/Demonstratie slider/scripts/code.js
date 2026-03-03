const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");

	sliders[0].addEventListener("change", update);
	sliders[0].addEventListener("input", update);


	colorDemos[0].style.backgroundColor="red";
}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let value=sliders[0].value;
	console.log("de waarde van de slider is momenteel : "+value);
}
window.addEventListener("load", setup);