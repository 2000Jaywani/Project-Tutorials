// class Parent{
//     hello()
//     {
//         console.log("hello");
//     }
// }

// class Child extends Parent{}

//     let obj = new Child();


//program 2
class Person
{
    constructor(){
        console.log("enter parent constrctor");
        this.species="home species";    
    }
    eat(){
        console.log("Eat");
    }
    // sleep(){
    //     console.log("sleep");
    // }
    work(){
        super.eat
        console.log("Do Nothing");
    }
}
class Engineer extends Person{
        
        constructor(branch){
            console.log("enter child constrctor");
            super();// to invoke parrent class constructor
            this.branch=branch;
            
            console.log("exit child constrctor");
        }    

    
    work(){
            confirm.log("Solve Problem, Build Something !!!!!");
        }

    }

    class Doctor extends Person{
        work(){
            confirm.log("treat patience & Tablets");
        }

    }


let engnerObj=new Engineer();


