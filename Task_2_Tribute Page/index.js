const expandBtn=document.querySelector(".checkbtn");
const checkBtn=document.querySelector(".check");
const introSec=document.querySelector(".intro");
const timeLine=document.querySelector(".timeLine");
expandBtn.addEventListener("click",()=>{ 
    if(checkBtn.checked)
    {
        timeLine.classList.add("checked");
        introSec.classList.add("introDis");
    }
    else{
        timeLine.classList.remove("checked");
        introSec.classList.remove("introDis");
    }
})