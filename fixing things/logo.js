let logo = document.querySelector(".log");

let mk = logo.innerHTML.split("");
let g = mk.join("");
logo.innerHTML = logo.innerHTML.split(g).join("");

mk.forEach(e=>{
  let cr = document.createElement("span");
  cr.innerHTML = e;
      cr.className = "lop";

  logo.appendChild(cr)

  
}); 
 let gg = document.querySelectorAll(".lop");
 let i = 0;
 while (i < gg.length) {
   if(i==0){
   gg[i].style.color = "#007bff";
}
if(i==1){
  gg[i].style.color = "#007bff"
}
if(i==2){
  gg[i].style.color="#dc3545"
}
if(i==3){
  gg[i].style.color = "#007bff"
}
if(i==4){
  gg[i].style.color = "#007bfa"
}

   i++;
 }

