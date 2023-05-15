
/*let logo = document.querySelector(".log");

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
 */
let bull = document.querySelector(".go");
let ab = document.querySelectorAll(".a");
 
let but1 = document.querySelector('.set  div');
let but2 = document.querySelector('.adlist');

let clone = but2.cloneNode(true);
let clone2 = but1.querySelector('button');
// but1.style.background = 'red'
mediaQuery(function(){
let met =   window.matchMedia('(min-width:600px)');
if(met.matches){
  but2.style.display = 'block';
  // but1.removeChild(clone2)
  
  but1.removeChild(clone)
  but1.removeChild(clone2)
  let red = but1.innerHTML;
  but1.innerHTML = '';
  but1.appendChild(clone2);
  but1.innerHTML = but1.innerHTML + red;

}else{
//  but1.style.background = 'red'
// but1.appendChild(clone2)
// but1.children[0].remove()
document.querySelector('.bn').remove()
but1.appendChild(clone2)
but1.appendChild(clone)

// but1.clone2;
  but2.style.display = 'none';

}


})
let time = setInterval(function(){
  for(k=0; k < ab.length; k++){
    if(k==0){
      bull.style.width = ab[k].offsetWidth+"px";
      bull.style.left = ab[k].offsetLeft+"px";

    }
    
    
    
  }
},0000);
ab.forEach(e=>{ e.addEventListener("click",function(){
    clearInterval(time)

  bull.style.transition = "all cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s";
  bull.style.width = e.offsetWidth+"px";  bull.style.left = e.offsetLeft+"px";
  
})
  
})
let h1 = document.querySelector("h1");
let bodys = document.querySelector("body img");
// let hcard = document.querySelector(".hcard");
// hcard.onclick = function(){
//   location.href = 'index.html';
// }




window.onload = function(){
  let image = localStorage.getItem("image");
let name = localStorage.getItem("name");

bodys.src = image;

h1.innerHTML = name;
}
let adlist = document.querySelector('.adlist');
let fail = false;
adlist.onclick = function(){

let fg = localStorage.getItem('list');
//   if(fail == false){
//     de.push(bodys.src)
// fail =true;   
//   }else{
//     de.pop();
//     fail = false;
//   }

  // if(fg ===null){
  //    fg = null;
  //  }else {
  //   fg = localStorage.getItem('list');

  //  }
//     let ft = [];
//    if(fg !== null){
// if(fg.indexOf(''+de[0])){
// de = fg;
// // fg.push(de[0])
// }else{
// console.log(de);
// fg.concat(de);
// ft = fg;
// }
//    }else{
//     fg = de;
//     ft = fg;
// console.log("sj")
//   }
  let ij =  localStorage.getItem('image');
  let rf =""+ fg;
  rf.split(ij).join('')
  let de =''+ fg;

  if(fail == false){
    // fg = ''+fg;
      if(de.endsWith(',')){
      
      }
    fail =true;   
      }else{
    de = '';
        // de.endsWith(''+ij)
        fail = false;
        
      }


   localStorage.setItem('list',(fg == null)?new Array(""+ij+','):(!fg.match(ij))?fg.concat([""+de]):fg);
   
}


