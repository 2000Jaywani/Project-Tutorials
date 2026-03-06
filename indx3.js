// let new_btn=document.createElement("button");
// new_btn.innerText("Click to me !");
// console.log(new_btn);


// let div=document.querySelector("div");
// //div.append(new_btn);
// // div.prepend(new_btn);
// // div.before(new_btn);
// div.after(new_btn);

// let p=document.querySelector("p");
// p.after(new_btn);


// let HEADING=document.createElement("h1");
// HEADING.innerHTML="<i>HI, ITS NEW JOB MNC 7-8 lakhs </i>";

// document.querySelector("body").prepend(HEADING);


// let para=document.querySelector("p");
// para.remove();


// let btn=document.querySelector("button");
// btn.innerText("Click Me");
// console.log(btn);
// console.dir(btn);
// btn.style.color("white");
// btn.style.backgroundColor("red");
// document.querySelector("body").prepend(btn);



let paragraph=document.querySelector("p");


let btn=document.querySelector("#btn");
// btn.onclick=()=>{
//     console.log("btn click 1");
//     let a=25;
//     a++;
//     console.log(a);
// }

btn.addEventListener("click", ()=>{
    console.log("Button 1 Clicked bu AddeventListener");
})


btn.addEventListener("click", (evt)=>{
    console.log("Button 1 Clicked bu AddeventListener Handler 2");
    console.log(evt);
})