// let data="secret information";
// class User{
//     constructor(name, email){
//         this.name=name;
//         this.email=email;

//     }
//     Viewdata(){
//         console.log("Data =", data);
        
//     }
// }

// class Admin extends User{

//     constructor(email,name)
//     {
//         super(name,email);
//     }
//     editData(){
//         data="new value";
//     }
// }


// let student1=new User("Jay","jaywani67@gmail.com");

// let Admin1=new Admin("Admin","admin@123.com");


//try catch error handling 
// let a=5;
// let b=10;
// console.log("a =",a);
// console.log(" b =",b);
// console.log("a + b = ",a+b);

// try{
//     console.log("a + b = ",a+c);

// }
// catch(err){
//     console.log(err);
// }

// console.log("a + b = ",a+b);
// console.log("a + b = ",a+b);
// console.log("a + b = ",a+b);




// to set time for output programmer choice
// setTimeout(()=>{
//     console.log("jay");
// }, 2000);


//callback function
// function sum(a,b)
// {
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calculator(1,3,(a,b)=>{
//     console.log(a+b);
// });

// function getdata(dataId){
//     console.log("Data ",dataId);
// }


// const getPromise=()=>{
// return new Promise((resolve, reject)=>
// {
//     console.log("I am promise to you to rutuja thorat......");
//     resolve("Grant Access Succesfully.......");
//    // reject("Network some error ");
// });
// }
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise Full filled ",res);
// })
// promise.catch((err)=>{
// console.log("Rejected",err);
// })

// function asyChrons(){
//     return new Promise ((resolve, reject)=>{

//         setTimeout(()=>{
//             console.log("Some Data 1");
//             resolve("Data Succesfully filled");
//         }, 1000)

//  })
// }

// console.log("fetching data 1");
// let p1=asyChrons();
// p1.then((result) => {
//    console.log(res); 
// });

// .catch((err) => {
    
// });

function getData(datAID,getnextData)
{
return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        console.log("data ",datAID);
        resolve("Success");
        if(getnextData)
        {
            getnextData();
        }
    },2000);
});
}

async function getDataAll(){
    await getData(1);
    console.log("Data 1");

    await getData(2);
    console.log("Data 2");

    await getData(3);
    console.log("Data 3");
}


//IIFE function without method call ()
(async function (){
    await getData(1);
    console.log("Data 1");

    await getData(2);
    console.log("Data 2");

    await getData(3);
    console.log("Data 3");
})();


//promise chain 
// let p1=getData(1);
// p1.then((res)=>{
//         console.log(res);
// })

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then(()=>{
//         console.log(res);
//     })
// })

// getData(1)
//     .then((res)=>{
//     return getData(2);
// })
// .then((res)=>{
//     return getData(3);
// })
// .then((res)=>{
//     return getData(res);
// });


//async await function
async function hello()
{
    console.log("Hiii to all");
}


function API (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Weather Data");
            resolve(200);
        },2000)
    })
}

async function getWeather() 
{
    await API();
    await API();
}
















