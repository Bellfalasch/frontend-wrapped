import "../keyboard.js";
import "../next-button.css";
import "../styled-h1.css";
import "./page-1.css";

// Draw a simple SVG pie chart on a canvas, base it on Front-end forum participant stats
const ctx = document.querySelector("canvas").getContext("2d");

const frontendforums = [
	{ type: "Weekly", total: 9, color: "#00b09b" },
	{ type: "Bi-weekly", total: 7, color: "#0083b0" },
	{ type: "Collabs", total: 3, color: "beige" },
];

const sum = 0;
const totalNumberOfForums = frontendforums.reduce(
	(sum, { total }) => sum + total,
	0,
);
let currentAngle = 0;

for (const typeValue of frontendforums) {
	const portionAngle = (typeValue.total / totalNumberOfForums) * 2 * Math.PI;
	ctx.beginPath();
	ctx.arc(200, 200, 200, currentAngle, currentAngle + portionAngle);
	currentAngle += portionAngle;
	ctx.lineTo(200, 200);
	ctx.fillStyle = typeValue.color;
	ctx.fill();
	ctx.stroke();
	ctx.strokeStyle = "10px solid black";
}
