import "../keyboard.js";

const names = [
	{ name: "Joakim", type: "gjensidige", country: "Sweden", team: undefined },
	{ name: "Alexandra", type: "gjensidige", country: "Sweden", team: undefined },
	{ name: "Daniel", type: "convert", team: "Private, Sales" },
	{ name: "Yamini", type: "convert", team: "Sweden" },
	{ name: "Magnus", type: "gjensidige", team: "Claims" },
	{ name: "Marie", type: "gjensidige", team: "Claims" },
	{ name: "Yan", type: "gjensidige", team: "Private, Service" },
	{ name: "Eirik", type: "consultant", team: "Builders" },
	{ name: "Sander", type: "graduate", team: "Builders" },
	{ name: "Sigmund", type: "gjensidige", team: "Mobile App" },
	{ name: "Carl Magnus", type: "consultant", team: "Commercial, Sales" },
	{ name: "Adam", type: "consultant", team: "Commercial, Sales" },
	{ name: "Andreas", type: "gjensidige", team: "Claims" },
	{ name: "Quang", type: "gjensidige", team: "Claims" },
	{ name: "Dung", type: "gjensidige", team: "Private, Sales" },
	{ name: "Erlend", type: "intern", country: "Norway", team: undefined },
	{ name: "Odne", type: "convert", team: "Claims" },
	{ name: "Solveig", type: "consultant", team: "Private, Sales" },
];
const delay = 400;

for (let i = 0; i < names.length; i++) {
	const staff = names[i];
	setTimeout(() => {
		const block = document.createElement("div");
		block.className = `falling-block ${staff.type}`;
		block.textContent = staff.name;
		const subtitle = document.createElement("span");
		subtitle.className = "teamname";
		subtitle.textContent = staff.country || `Norway: ${staff.team}`;
		block.appendChild(subtitle);
		document.body.appendChild(block);
	}, i * delay);
}
