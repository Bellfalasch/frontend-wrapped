import"./modulepreload-polyfill.js";/* empty css           *//* empty css         */let t=document.querySelector("canvas").getContext("2d");const r=[{type:"Weekly",total:9,color:"#00b09b"},{type:"Bi-weekly",total:7,color:"#0083b0"},{type:"Collabs",total:3,color:"beige"}];let a=r.reduce((e,{total:o})=>e+o,0),l=0;for(let e of r){let o=e.total/a*2*Math.PI;t.beginPath(),t.arc(200,200,200,l,l+o),l+=o,t.lineTo(200,200),t.fillStyle=e.color,t.fill(),t.stroke(),t.strokeStyle="10px solid black"}