import "../keyboard.js";

/*
window.onload = function() {
    const fireworks = document.createElement('div');
    fireworks.className = 'explode';
    document.body.appendChild(fireworks);
};
*/

window.onload = () => {
	const speeds = [4, 8, 12, 16, 20];
	const sizes = ["1.0rem", "1.5rem", "2rem", "2.5rem", "3rem"];

	for (let i = 0; i < 100; i++) {
		const digit = document.createElement("div");
		digit.className = "digit";
		digit.textContent = Math.floor(Math.random() * 10);
		digit.style.left = `${Math.random() * window.innerWidth}px`;
		digit.style.animationDuration = `${
			speeds[Math.floor(Math.random() * speeds.length)]
		}s`;
		digit.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];
		document.body.appendChild(digit);
	}

	// Stop animation after 15 seconds
	/*
  setTimeout(() => {
    document.querySelectorAll('.digit').forEach(digit => {
      digit.className = 'digit final';
    });
  }, 15000);
  */
};
