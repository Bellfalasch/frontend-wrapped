window.addEventListener("keydown", (event) => {
	if (event.key === "ArrowRight") {
		const form = document.querySelector("form");
		if (form) {
			const action = form.getAttribute("action");
			if (action) {
				window.location.href = action;
			}
		}
	} else if (event.key === "ArrowLeft") {
		window.history.back();
	}
});

// Get all the li elements on the page
const liElements = document.querySelectorAll("li");

// Set initial styles for the li elements
liElements.forEach((li, index) => {
	li.style.animation = `fadeInFromRight 0.5s ease-in-out ${
		index * 0.5
	}s forwards`;
});
