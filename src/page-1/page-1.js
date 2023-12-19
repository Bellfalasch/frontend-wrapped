import * as gsap from "gsap";
/*
function spaNavigate(data) {
  // Fallback for browsers that don't support this API:
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data);
    return;
  }

  // With a transition:
  document.startViewTransition(() => updateTheDOMSomehow(data));
}
*/

// target the element with a class of "green" - rotate and move TO 100px to the left over the course of 1 second. 
//gsap.to("canvas", {rotation: 360, x: 100, duration: 1});
/*
gsap.to("h1::before", {x: 300, duration: 1});

var shapes = "rect"
var tl = gsap.timeline({repeat:1, yoyo:true});

tl.fromTo(shapes, {drawSVG:"100%"}, {duration: 1, drawSVG:"50% 50%", stagger: 0.1})
*/
// Draw a simple SVG pie chart on a canvas, base it on Front-end forum participant stats
let ctx = document.querySelector("canvas").getContext("2d");

const frontendforums = [
    { type: "Weekly", total: 9, color: "#00b09b" },
    { type: "Bi-weekly", total: 7, color: "#0083b0" },
    { type: "Collabs", total: 3, color: "beige" }
];

let sum = 0;
let totalNumberOfPeople = frontendforums.reduce((sum, {total}) => sum + total, 0);
let currentAngle = 0;

for (let typeValue of frontendforums) {
    let portionAngle = (typeValue.total / totalNumberOfPeople) * 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(200, 200, 200, currentAngle, currentAngle + portionAngle);
    currentAngle += portionAngle;
    ctx.lineTo(200, 200);
    ctx.fillStyle = typeValue.color;
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = "10px solid black";
}