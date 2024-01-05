import "../keyboard.js";

window.onload = () => {
	const digits = ["1", "1", "1"];
	const classes = ["left", "middle", "right"];

	for (let i = 0; i < digits.length; i++) {
		const digit = digits[i];
		const element = document.createElement("div");
		element.className = `digit ${classes[i]}`;
		element.textContent = digit;
		element.style.left = `calc(50% + ${(i - 1) * 8}rem)`;
		document.body.appendChild(element);
	}
};
