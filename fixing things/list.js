let bv = ["img/shehulk.jpg","img/spoder1.jpg","img/blackadam.jpg","img/moonknight.jpg","img/thor.jpg","img/Msmavel.jpg","img/mobius.jpg","img/sonic3.jpg","img/doctorstrange.jpg","img/halo.jpg"];

bv.sort(()=> Math.random() > 0.5?1:-1).slice(0,bv.length)
let pop = document.querySelector(".scen")
bv.forEach(e=>{
  let kok = document.createElement("div");
  kok.style.setProperty("background-image",`url(${e})`)

  kok.className = "mov mo";
  pop.appendChild(kok);
  let creat = document.createElement("div");

  creat.className = "clas";
  kok.appendChild(creat);
  
  
});


