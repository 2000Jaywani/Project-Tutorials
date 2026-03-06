

let modeBtn=document.querySelector("#mode");

let currentMode="light";


modeBtn.addEventListener("click",()=>{
//    console.log("change the mode");

    if(currentMode==="lght"){
        currentMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else
    {
        currentMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currentMode);

})  