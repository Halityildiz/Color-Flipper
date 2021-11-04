const body = document.querySelector('.container');
const output = document.querySelector('.result')
const button = document.querySelector('.button');
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

let hourEl = document.querySelector(".hour");
let minuteEl = document.querySelector(".minute");
let clockEl = document.querySelector(".clock");
let secondEl = document.querySelector(".second");

let time = () =>{
    let currenTime = new Date();
    let currentHour = currenTime.getHours();
    let currentMinute = currenTime.getMinutes()
    let currentSecond = currenTime.getSeconds()
    ;
    secondEl.textContent = currentSecond.toString().padStart(2,"0")
    hourEl.textContent = currentHour.toString().padStart(2,"0");
    minuteEl.textContent = currentMinute.toString().padStart(2,"0")
}
setInterval(time, 1000);

