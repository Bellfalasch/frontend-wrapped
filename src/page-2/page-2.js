import "../keyboard.js";

const liElements = document.querySelectorAll("li");

// Set initial styles for the li elements
for (let i = 0; i < liElements.length; i++) {
	liElements[i].style.animation = `fadeInFromRight 0.5s ease-in-out ${
		i * 0.75
	}s forwards`;
}
