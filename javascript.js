let slide = document.querySelectorAll(".slider"),
    arrowleft = document.querySelector("#left"),
    arrowright = document.querySelector('#right'),
    current = 0;


function reset(){
  for(let i =0;i<slide.length;i++){
    slide[i].style.display="none";
}}
function start(){
  reset();
  slide[0].style.display="block";
}
function left(){
    reset();
    slide[current  -1].style.display ="block";
    current --;
}
function right(){
  reset();
  slide[current+1].style.display="block";
  current++;
}

arrowleft.addEventListener("click",()=>{
    if(current == 0){
      current = slide.length;
    }
    left();


});
arrowright.addEventListener("click",()=>{
    if(current == slide.length-1){
      current = -1;
    }
    right();
});
start();
/************************/
const wrap = document.querySelector(".wrap");

const buttontop = document.querySelector("#buttontop");
const navmenu = document.querySelector("header nav");
const wind = window.innerHeight;
window.addEventListener("scroll",()=>{
  if(wrap.getBoundingClientRect().bottom<wind/4){
    buttontop.style.display="block";
    navmenu.classList.add("shownav");
  }else{
    buttontop.style.display="none";
    navmenu.classList.remove("shownav");

  }
})
