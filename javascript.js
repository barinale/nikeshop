let slide = document.querySelectorAll(".slider"),
    arrowleft = document.querySelector("#left"),
    arrowright = document.querySelector('#right'),
    current = 0;
let spend=0;
 setInterval(move,3000);
 let moves = true;
 let count = 0;
 function move(){
   if(moves){
     right();
   }else{
     if(count ==3){
       moves=true;
       count = 0;
     }
     count++;
   }
 }

function reset(){
  for(let i =0;i<slide.length;i++){
    slide[i].style.display="none";
}}
function start(){
  reset();
  slide[0].style.display="block";
}
function left(){
  if(current == 0){
    current = slide.length;
  }
    reset();
    slide[current  -1].style.display ="block";
    current --;
}
function right(){
  if(current == slide.length-1){
    current = -1;
  }
  reset();
  slide[current+1].style.display="block";
  current++;
}

arrowleft.addEventListener("click",()=>{
    left();
    moves=false;

});
arrowright.addEventListener("click",()=>{
  moves=false;

    right();
});
start();
/************************/
const wrap = document.querySelector(".wrap");
const buttontop = document.querySelector("#buttontop");
const navmenu = document.querySelector("header nav");
const shop = document.querySelector("#shop");
const abour = document.querySelector("#about");

const link = document.querySelectorAll("a");
const wind = window.innerHeight;
window.addEventListener("scroll",()=>{
  if(wrap.getBoundingClientRect().bottom<wind/1.2){
    buttontop.style.display="block";
    navmenu.classList.add("shownav");
  }else{
    buttontop.style.display="none";
    navmenu.classList.remove("shownav");
  }

  if(shop.getBoundingClientRect().top<0+navmenu.offsetHeight &&
shop.getBoundingClientRect().bottom>0+navmenu.offsetHeight){
    link[0].classList.remove("active");
    link[1].classList.add("active");
    link[2].classList.remove("active");

  }
  else if (about.getBoundingClientRect().top<0+navmenu.offsetHeight) {
    link[0].classList.remove("active");
    link[1].classList.remove("active");
    link[2].classList.add("active");
  }
  else{
    link[0].classList.add("active");
    link[1].classList.remove("active");
    link[2].classList.remove("active");

  }
})
