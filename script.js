//arithematic operators in javascript
// let a=5;
// let b=3;

// console.log("a + b =",a + b);
// console.log("a - b =",a - b);
// console.log("a * b =",a * b);
// console.log("a / b =",a / b);
// console.log("a % b =",a % b);
// console.log("a ** b =",a ** b);

//unary operator

//a++;
// //a--;
// console.log(--a);
// console.log(a);


//Assignment variable 
//let a=5; 
//let b=2;

//a**=4;//a=a+4 //a=5+4
//console.log(a);

//Comparison operators
// let a=5; 
// let b=6;
// console.log("5 == 2",a==b)	
// console.log("5 != 2",a!=b)	

// console.log("5 === 5",a===b)	

// console.log("5 >= 5",a>=b)	

// console.log("5 >= 5",a<=b)	

//logical operator
// let a=6;
// let b=5;
// let cond1=a>b;
// let cond2=a===b;
// console.log("cond1 && cond2", cond1 && cond2);

// console.log("cond1 || cond2", cond1 || cond2);


// console.log("cond1 ! cond2", !(a<b));

// console.log("cond1 ! cond2", !(a===b));

//Conditional Statements 
// let age=15;
// if(age>18)
// {
//     console.log("you can vote")
// }
// else
// {
//     console.log("you can not vote")
// }


// let mode ="dark";
// let color;
// if(mode=="dark")
// {
//     color="black";
// }
// if(mode=="light")
// {
//     color="white";
// }
// console.log(color)


// let num=9;
// if(num%2==0)
// {
//     console.log(num,  "even number");
// } 
// else
// {
//     console.log(num, "odd number");
// }


// console.log("================================================");
// let modes="dark";
// let colors;
// if(modes=="dark")
// { 
//         colors ="black";
// }
// else if(modes=="blue")
// {
// colors ="blue";
// }
// else if(modes=="pink")
// {
//     colors ="pink";
// }
// else{
//     colors ="white";   
// }
// console.log(colors);
    
// if(modes=="dark")
// {
//     console.log(modes);
// }
// //Ternary Operator

// let aged=12;
// let result=aged>18 ? "ADULT": "NOT ADULT";
// console.log(result);


//prompt in javascript 

// let name=prompt("Hello what is name ?");
// console.log(name);

// let number=prompt("enter the number");
// if(number %5==0)
// {
//     console.log(number,"Number is Multiple of 5");
// }
// else
// {
//     console.log(number,"Not Number is Multiple of 5");
// }

/////
//let score=95;

// let score=prompt("ENter your score (0-100) ======");
// let grade;
// if(score>=90 && score<=100)
// {
//     grade="A";
// }
// else if(score >=70 && score<=89)
// {
//     grade="B";
// }
// else if(score >=60 && score<=69)
// {
//     grade="C";
// }else if(score >=50 && score<=49)
// {
//    grade="F";
// }
// console.log("According to your score is", score,"AND Grade is this ",grade);



// for(let i=1; i<=10000; i++)
// {
//     console.log("JS LOOP 5 TIMES...")
// }

//calculate sum of 1 to 5
// sum=0;
// for (let i=1; i<=100; i++)
// {
//     sum=sum+i;
//     //sum--;
//     //sum++;
// } 
// console.log("THE SUM IS ",sum);


//infinite loop 

// for (let i=1; i>=0; i++){
//     console.log("I = ",i);
// }
// for (;;)
// {
//     console.log("ROll NO 1");
// }

//crashed code any browser dont do that.........  

//While Loop

// let i=1;
// while(i<=10)
// {
//     console.log("I = ",i);
//     i++;
// }

//do while loop

// let i=1;
// do{
//     console.log("Apna College ",i);
//     i++;
// }
// while(i<=10);

//for of loop Iterator
// let str="LittileStar";
// size =0;
// for(let i of str){
//     console.log("I =",i);
//     size++
// }
// console.log("SIZE =",size)

//let for inLoop

// let student={
//     name:"JAY WANI",
//     Age: 24,
//     Marks:96,
//     GRADE:'A'
// };

// for(let key in student){
//     console.log("KEY =",key,"VALUE =",student[key]);
// }

//print all even numbers in javscript 

// for(let i=0; i<=100; i++)
// {
//     if(i%2!==0)
//     {
//      console.log("Num = ",i);
//     }
    
// }

// enter the 4 digit password 

// let getNum=3456;
// let UserName=prompt("Enter Correct 4 digit Password = ")
// while(UserName!=getNum)
// {
//     UserName=prompt("Wrong Password try again --- ")
// }
// console.log("Congrations Correct Password.......");


// let str="JAY WANI";
// let Str_len="JAY KIRAN WANI";

// console.log(Str_len[7]);


// let SpecialString=`this is backtick exeample from Templete literals`;
// console.log(typeof SpecialString);



// let obj={
//     item:'pen',
//     price:10
// }


// let op=`the cost of ${obj.item} is ${obj.price} rupees ${1+3+4}`;//templete literal 
// console.log(op);



// console.log("the cost of", obj.item,"is ",obj.price)


// console.log("new\nline ")

// console.log("new\tline ")


// let str11="Jaywani";
// str11=str11.toUpperCase();
// str11=str11.toLowerCase();
// console.log(str11);;


// let strle="           JAY WANI";
// console.log(strle.trim());

// let len="01234567";
// console.log(len.slice(1,6));


// console.log("=================================");

// let le1="JAVA";
// let le2="DEVELOPMENT";
// let res=le1.concat(le2);
// let res1=le1+le2;

// console.log(res);
// console.log(res1);



// let line="Hello";
// console.log(line.charAt(0));
// console.log(line.replace("H","A"));



// let fullName=prompt("Enter full name ");
// let UserName="@"+fullName+fullName.length;
// console.log(UserName);



//arrays 4 chapter
// let arr=[1,233,3,6,45,32,23,45,64,32,1,"HANUMAN","SHRIRAM","sita","laxman","bharat","sharad"];
//console.log(arr);

// for(let i=0; i<=arr.length; i++){
//     console.log(arr[i]);
// }


console.log("========================")
//for of

// let arr1=["HANUMAN","SHRIRAM","sita","laxman","bharat","sharad"]
// for(let me of arr1){
//     console.log(me.toUpperCase());
// }


// let mark=[87,65,43,22,45,76,43,21];
// let sum=[0];

// for(let val of mark){
//     sum +=val;
// }
// let avg=sum/mark.length;
// console.log(`"AVERAGE OF MARKS IS = ",${avg}`);


//let items=[234,56,54,324,56,43,2,14];
// let i=0;
// for (let val of items)
// {
//     console.log(`value of index ${i} =${val}`);
//     let offer =val/10;
//     items[i]=items[i]-offer;
//     console.log(`value of offer =${items[i]}`);
//     i++;
// }



// let items=[234,56,54,324,56,43,2,14];

// for(let i=0; i < items.length; i++)
// {
//     let offer=items/10;
//     items[i]-=offer;
// }
// console.log(items);


// let fooDish=["patato","tamato","jinger","callyflower"];
// console.log(fooDish);
// let deleteIem=fooDish.pop();
// //fooDish.push("chips","burger","Berger");
// console.log(fooDish);
// console.log("Delete Item",deleteIem);

// console.log(fooDish);
// console.log(fooDish.toString());


// let marvel_hero=["Hulk","Spidernman","thor","dr.Jay"];
// let dc_hero=["superman", "batman"];
// let heros=marvel_hero.concat(dc_hero);
// console.log(heros);

//marvel_hero.unshift("Antman");

// let val=marvel_hero.shift();
// console.log("delete = ",val);
// console.log(marvel_hero);
// console.log(marvel_hero.slice(1,3));


//splice
// let arr3=[1,2,3,4,5,6,7];
// arr3.splice(2,2,101,102);

// //add elemment
// arr3.splice(2,0,101);

// //delete emement
// arr3.splice(3,1);

// //replace element
// arr3.splice(3,1,101)


// //Function in javascript
// function FuncName()
// {
//     console.log("JAY WANI PUNE.");
//     console.log("MNC PLACED SOON FEW MONTHS.")
// }
// FuncName();


// function funcmess(mes){
//     console.log(mes);//parameter->input
// } 
// funcmess("HII TO ALL"); //argument 


// function sum(a,b)
// {
//     console.log(a+b);   
// }
// sum(4,6);


// function mul(a,b){
//     return a*b;
// }

// const arrowmul=(a,b)=>{
//     return a*b;
// }
// arrowmul(2,3);





function countVowels(str)
{
    count=0;
    for(const char of str)
    {
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
        {
            count++;
        }        
    }
    //return count;
    console.log(count);
    
}
countVowels("aaaa");
console.log("=============================================")



const countVow = (str) => {

    count=0;
    for(const char of str)
    {
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
        {
            count++;
        }        
    }
    //return count;
    console.log(count);
}
countVow("aeiou");
console.log("=============================================")

//for each loop in arrays

let arr2=[1,2,3,4,5,6,7,"pune"]
arr2.forEach(function printValue(val) {//value at each index
    console.log(val);    
});


let arr4=["pune","mumbai","hyderabad"];
arr4.forEach((val,ind,arr4)=>{
    console.log(val.toUpperCase(),ind,arr4);
});


let nums=[6,5,43,2,23,45]
nums.forEach((num)=>{
    console.log(num*num);
})

//map in array 
let number=[7,654,3,2,45,6]
let newArr=number.map((val)=>{
        return val*val;
})
console.log(newArr);

//filter in array
let ele=[1,2,3,4,5,6,7,8,9];
let evnele=ele.filter((val)=>{
    //return val % 2 ===0;
    return val > 3;
    //return 3 > val;
})
console.log(evnele);

//reduce arrays
let ele2=[1,2,3,4,5]
const oytpu=ele2.reduce((res,curr)=>{

        return res+curr;
    })
console.log(oytpu);    

//filter example
let rank=[76,75,43,57,65,43,21,90,91,93,96];
let toppers=rank.filter((val)=>{
    return val < 90;
})
console.log(toppers);



let n=prompt("enter the numbers = ");
let arr11=[];
for(let i=1; i<=n; i++){
    arr11[i-1]=i; 
}
console.log(arr11);

let sum=arr11.reduce((red,cur)=>{
    return red+cur;
})
console.log(sum);


let fact=arr11.reduce((red,cur)=>{
    return red*cur;
})
console.log("factorial =",fact);


