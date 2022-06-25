
const inputInfo=document.querySelectorAll("[data-display]");
const prevOutput=document.querySelector(".prev_output");
const curOutput=document.querySelector(".cur_output");
inputInfo.forEach((ele)=>{

    ele.addEventListener('click',()=>{

        curOutput.innerHTML+=ele.innerHTML;

        try{
            prevOutput.innerHTML=eval(curOutput.innerHTML);
        }
        catch(e){
            if(e)
            prevOutput.innerHTML="";
        }
    })
})
function clearAll(){
    prevOutput.innerHTML="";
    curOutput.innerHTML="";
}
function backspace(){
    if(curOutput.innerHTML.length<=1)
    {
        curOutput.innerHTML="";
        prevOutput.innerHTML="";
    }
    else{
        curOutput.innerHTML=curOutput.innerHTML.substring(0,curOutput.innerHTML.length-1);
        try{
            prevOutput.innerHTML=eval(curOutput.innerHTML);
        }
        catch(e){
            if(e)
            prevOutput.innerHTML="";
        }
    }
}
function equal(){
    try{
        curOutput.innerHTML=eval(curOutput.innerHTML);
    }
    catch{
        alert("Invalid Expression");
    }
    prevOutput.innerHTML="";
}