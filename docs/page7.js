import"./modulepreload-polyfill.js";import"./keyboard.js";window.onload=()=>{const i=["1","1","1"],n=["left","middle","right"];for(let t=0;t<i.length;t++){const o=i[t],e=document.createElement("div");e.className=`digit ${n[t]}`,e.textContent=o,e.style.left=`calc(50% + ${(t-1)*8}rem)`,document.body.appendChild(e)}};
