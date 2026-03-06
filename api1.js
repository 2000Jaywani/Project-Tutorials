const URL="https://cat-fact.herokuapp.com/facts";

// let promise=fetch(URL);
// console.log(promise);

const fatcp=document.querySelector("#fact");


btn.addEventListener("click", getfacts);
const getfacts=async()=>{
    console.log("getting url data");
    let response=await fetch(URL);
    // console.log(response.status);
    console.log(response);
    let data=await response.json();
    // console.log(data[0].text); //data is global in JS
    fatcp.innerText =data[2].text;
}

const btn=document.querySelector("#btn");




// FULL NAME : JAY KIRAN WANI.
// UAN NO: 102060144472.
// DATE OF JOINING : 06/03/2024.
// DATE IF EXIT : 17/12/2024.