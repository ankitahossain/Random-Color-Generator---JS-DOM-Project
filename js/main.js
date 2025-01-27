// get all html element

const randomColorBtn = document.querySelector(".randomColorBtn");
const colorBox =document.querySelector(".colorBox");
const colorcode= document.querySelector(".colorCode");

function getrandomColor(){
  
    const randomColor =`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`
   return randomColor;    
}

function addrandomColor(){
   
    const randomColor= getrandomColor();
    colorBox.style.backgroundColor=randomColor;
    colorcode.textContent=randomColor;
}
randomColorBtn.addEventListener("click",addrandomColor);
    

