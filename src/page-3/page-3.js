const names = [
  {name: "Joakim", type: 'gjensidige'},
  {name: "Alexandra", type: 'gjensidige'},
  {name:"Daniel", type: 'convert'},
  {name: "Yamini", type: 'convert'},
  {name: "Magnus", type: 'gjensidige'},
  {name: "Marie", type: 'gjensidige'},
  {name: "Yan", type: 'gjensidige'},
  {name: "Eirik", type: 'consultant'},
  {name: "Sander", type: 'graduate'},
  {name: "Sigmund", type: 'gjensidige'},
  {name: "Carl Magnus", type: 'consultant'},
  {name: "Adam", type: 'consultant'},
  {name: "Andreas", type: 'gjensidige'},
  {name: "Quang", type: 'gjensidige'},
  {name: "Dung", type: 'gjensidige'},
  {name: "Erlend", type: 'intern'},
  {name: "Odne", type: 'convert'},
  {name: "Solveig", type: 'consultant'},
];
const delay = 500;

names.forEach((staff, index) => {
    setTimeout(() => {
        const block = document.createElement('div');
        block.className = 'falling-block' + ' ' + staff.type;
        block.textContent = staff.name;
        document.body.appendChild(block);
    }, index * delay);
});