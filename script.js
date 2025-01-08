const count=document.querySelector(".count");
const minusbtn=document.querySelector(".minusbtn");
const plusbtn=document.querySelector(".plusbtn");
const changeby=document.querySelector(".changeby");
const reset=document.querySelector(".reset");


minusbtn.addEventListener("click", ()=> {
    const countvalue=parseInt(count.innerText)
    const changebyvalue=parseInt(changeby.value)
    count.innerText=countvalue - changebyvalue
    
});

plusbtn.addEventListener("click", ()=> {
    const countvalue=parseInt(count.innerText)
    const changebyvalue=parseInt(changeby.value)
    count.innerText=countvalue + changebyvalue
    
});

reset.addEventListener("click",()=>{
   count.innerText=0
});
