//console.log("Welcome To Javascript Codes.......")

FirstName="JAY";
age=24;
price=99.99;
x=null;
y=undefined;
console.log(FirstName);
console.log(x);
console.log(y);

isfollow=true;//false
console.log(isfollow);

let name="NEW NAME";// we use let keyword 
console.log(name);

let a;
a=199;
console.log(a);

const b=20;
console.log(b);

//block 
{
    let i=10;
    console.log(i);
}
{
    let j=20;
    console.log(j);
}

let v=BigInt("87366748673897");
console.log(v);

let u=Symbol("HELLO!");
console.log(u);



const student={
    name: "JAY WANI",
    age:24,
    marks:9.5,
    Grade:'A',
    isPassesd:true
}

student["age"]=student["age"]+1;
console.log(student);



// console.log(student["age"]);

// console.log(student.age);

student ["name"]="PARAS WANI";
console.log(student["name"]);

console.log("=====================1.20 min==============================")
const product={
    Title: 'Ball pen',
    Rating:5,
    Offer:4,
    Local_Price:390
}
console.log(product);


const profile_insta={

    userName:"JAY WANI OFFICIAL",
    followers:718,
    follwing:811,
    isFollwo:false
}

console.log(typeof profile_insta["userName"]);