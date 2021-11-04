const body = document.querySelector('.container');
const output = document.querySelector('.result')
const button = document.querySelector('.guess');
const rgb = document.querySelector(".rgb");
const hex = document.querySelector(".hex");

rgb.addEventListener('click', (e)=>{
	button.addEventListener("click", (e) => {
		const randomNumber = () => Math.round(Math.random() * 256);
		const randomColor = () => `Rgb(${randomNumber()},  ${randomNumber()},  ${randomNumber()})`;
		body.style.backgroundColor = randomColor();
		output.innerHTML = `Background-Color : ${randomColor()}`;
	})
})

hex.addEventListener('click', (e)=>{
	button.addEventListener("click", (e) => {
		const hexNumber = () => Math.round(Math.random() * 16).toString(16);
		const hexColor = () => `#${hexNumber()}${hexNumber()}${hexNumber()}${hexNumber()}${hexNumber()}${hexNumber()}`;
		body.style.backgroundColor = hexColor();
		output.innerHTML = `Background-Color : ${hexColor()}`;
	})
})
