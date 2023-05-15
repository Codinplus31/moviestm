let bv = ["img/shehulk.jpg","img/spoder1.jpg","img/blackadam.jpg","img/moonknight.jpg","img/thor.jpg","img/Msmavel.jpg","img/mobius.jpg","img/sonic3.jpg","img/doctorstrange.jpg","img/halo.jpg"];

bv.sort(()=> Math.random() > 0.5?1:-1).slice(0,bv.length)

      let pop = document.querySelector(".sc")
            let pops = document.querySelector(".scen")
            let popss = document.querySelector(".scens")

            let popn = document.querySelector(".scenn")

            let popm = document.querySelector(".scenm")

bv.forEach(e=>{
  let kok = document.createElement("div");
  kok.style.setProperty("background-image",`url(${e})`)

  kok.className = "mov mo";
  pop.appendChild(kok);
  let creat = document.createElement("div");

  creat.className = "clas";
  kok.appendChild(creat);
  
  
});

let bvv = ["img/shehulk.jpg","img/spoder1.jpg","img/blackadam.jpg","img/moonknight.jpg","img/thor.jpg","img/Msmavel.jpg","img/mobius.jpg","img/sonic3.jpg","img/doctorstrange.jpg","img/halo.jpg"];
let bvn = ["opp.jpg","avatar.jpg","wednesday.jpg","65.jpg","dragon.jpg","see.jpg","secret.jpg","galaxy1.jpg","pussinboots.jpg","witcher.jpg"];

let bvm = ["strange.jpg","dragon1.jpg","avatar1.jpg","far.jpg","galaxy1.jpg","secret1.jpg","img/mobius.jpg","wednesday.jpg","see.jpg","img/Msmavel.jpg"];


let bvss = ["secret.jpg","img/doctorstrange.jpg","pussinboots.jpg","witcher.jpg","img/sonic1.jpg","img/shehulk1.jpg","wakanda.jpg","strange.jpg","img/spoder1.jpg"];
bvss.sort(()=> Math.random() > 0.5?1:-1).slice(0,bvss.length)

bvss.forEach(t=>{
  let man = document.createElement("div");
  man.style.setProperty("background-image",`url(${t})`)    

  man.className = "mov mo";
  pops.appendChild(man);
    let cre= document.createElement("div");

  cre.className = "clas";
  man.appendChild(cre);
  
  
  
})
bvn.sort(()=> Math.random() > 0.5 ? 1 : -1).slice(0, bvn.length)

bvn.forEach(t=> {
  let man = document.createElement("div");
  man.style.setProperty("background-image", `url(${t})`)

  man.className = "mov mo";
  popss.appendChild(man);
  let cre = document.createElement("div");

  cre.className = "clas";
  man.appendChild(cre);



});

bvm.sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, bvm.length)

bvm.forEach(t => {
  let man = document.createElement("div");
  man.style.setProperty("background-image", `url(${t})`)

  man.className = "mov mo";
  popn.appendChild(man);
  let cre = document.createElement("div");

  cre.className = "clas";
  man.appendChild(cre);



});

bvv.sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, bvv.length)

bvv.forEach(t => {
  let man = document.createElement("div");
  man.style.setProperty("background-image", `url(${t})`)

  man.className = "mov mo";
  popm.appendChild(man);
  let cre = document.createElement("div");

  cre.className = "clas";
  man.appendChild(cre);



});









class slide{
  
  constructor(target,callback){
        this.target = target;
        this.callback = callback;
        this.isHeld = false;
        this.active = null;
        this.time = 0;
        this.sum = null;
["mouseover","touchstart"].forEach(ty=>{
this.target.addEventListener(ty,this.down.bind(this));
});
    ["mouseup", "mouseout", "mouseleave", "touchend", "touchcancel"].forEach(type => {
      this.target.addEventListener(type, this.up.bind(this));
    
    });
  }

     up() {
       
       
            this.isHeld = false;
            clearTimeout(this.active);



    }
          down() {
            this.time +=1;
            if(this.time)
                   this.isHeld = true;
                   this.active = setTimeout(() => {
                     if (this.isHeld) {
                       this.callback();
                     }
                   }, 700);
          }
}

let movv= document.querySelectorAll(".mov");
movv.forEach(r=>{
      r.addEventListener("click", function() {
        localStorage.setItem("image", "" + r.style.backgroundImage.split("url(").join("").split(")").join("").split('"').join(""));
        localStorage.setItem("name", r.style.backgroundImage.split('url("img/').join("").split('url("').join('').split('.jpg")').join(""))
        location.href = "./te.html";
      })
})

let bn = document.querySelector(".new")

bn.style.height = window.innerHeight +"px";
window.onresize = function(){
  bn.style.height = window.innerHeight +"px";

}
movv.forEach(y=>{
/*
  y.addEventListener("touchstart",function(){
maxSelect(".new").animate({opacity:1},{opacity:0},[500]);
setTimeout(function(){
  bn.src = y.style.backgroundImage.split('url("').join("").split('")').join("");

  maxSelect(".new").animate({opacity:0},{opacity:1},[600]);

},900);
  });
    y.addEventListener("mousedown", function() {

      maxSelect(".new").animate({ opacity: 1 }, { opacity: 0 }, [500]);
      setTimeout(function() {
        bn.src = y.style.backgroundImage.split('url("').join("").split('")').join("");
      
        maxSelect(".new").animate({ opacity: 0 }, { opacity: 1 }, [600]);
      
      });
      
    });
*/
let hels =false;
new slide(y,function(){
  hels= true;
  let xou=null;
      maxSelect(".new").animate({ opacity: 1 }, { opacity: 0 }, [500]);
    xou =    setTimeout(function() {
    if(hels){

          maxSelect(".new").animate({ opacity: 0 }, { opacity: 1 }, [600]);
                    bn.src = y.style.backgroundImage.split('url("').join("").split('")').join("");
                            hels=false;

  }else{
    hels=true;

    clearTimeout(xou);
  }

        },500);
    
});
});

let left = document.querySelectorAll(".left");
let right = document.querySelectorAll(".right");

let xzc = 2;

function leftm(slit,k){
  slit.forEach(e=>{
    e.onclick = function(){

      let delta =  k;
      if(typeof k === "number"){
    delta = k;
      }else{
    if(k.deltaX !== 0){
      delta = k.deltaX; 
    } else {
      delta = k.deltaY;
    }
     
    k.preventDefault()
      }
    



xzc -= 4;
      e.parentElement.nextElementSibling.scrollLeft -= (delta) * 4;
    
e.parentElement.nextElementSibling.addEventListener('scroll',function(){
    
      if(e.parentElement.nextElementSibling.scrollLeft == 0){
      e.style.opacity = 0.1;
    }
      if(e.parentElement.nextElementSibling.scrollLeft < e.parentElement.nextElementSibling.scrollWidth - e.parentElement.nextElementSibling.offsetWidth){

      // right.forEach(r=>{
  // r.style.opacity =  1;
// })

e.nextElementSibling.style.opacity = 1;

      }
     console.log(e.parentElement.nextElementSibling.scrollLeft, e.parentElement.nextElementSibling.scrollWidth - e.parentElement.nextElementSibling.offsetWidth);
    });
    }

    // if(e.parentElement.nextElementSibling.scrollLeft == 0){
    //   e.style.opacity = 0.1;
    // }
    })
    

  }

  function times(k){

  
}


function rightm(k,slit){
  
 
  slit.forEach(e=>{

    e.onclick = function(y){
 
      let delta =  k;
      if(typeof k === "number"){
    delta = k;
      }else{
    if(k.deltaX !== 0){
      delta = k.deltaX; 
    } else {
      delta = k.deltaY;
    }
     
    k.preventDefault()
      }
    

      e.parentElement.nextElementSibling.scrollLeft -= (delta) * 4;

// e.parentElement.nextElementSibling.animate([{"scroll-left":'200'}],{
//         duration:300,
//         // iterations: Infinity,
//         direction: 'normal',
//         // fill: 'backwards',
//         easing: 'linear'
//       })
e.parentElement.nextElementSibling.addEventListener('scroll',function(){


       if(e.parentElement.nextElementSibling.scrollLeft !== 0){
  e.previousElementSibling.style.opacity =  1;
      }

     let ded = parseInt(e.parentElement.nextElementSibling.scrollWidth - e.parentElement.nextElementSibling.offsetWidth);

      if(parseInt(e.parentElement.nextElementSibling.scrollLeft) >= ded){
        e.style.opacity =  0.1;
              }
     
  })
              
    }
    
    })
    
}
leftm(left,200);
rightm(-200,right);















