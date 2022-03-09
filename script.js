
const hexa = document.querySelector(".hexa");
const btn = document.querySelector(".generate");

const generateColor = () =>{

   const randomColor = Math.random().toString(16).substring(2,8);
   
   document.body.style.backgroundColor = "#" +  randomColor;  

   hexa.innerHTML = "#" + randomColor;
   
};

btn.addEventListener("click", generateColor);


