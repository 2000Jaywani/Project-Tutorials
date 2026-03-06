class toyotaCar {

    constructor(brand,mileage)
    {
        console.log("Create a Object ")
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("Car is Start");
    }
    stop(){
        console.log("Car is stop");
    }
    // setBrand(brand){
    //     this.BrandName=brand;
    // }
}
let fortuner=new toyotaCar("fortuner",12);
//fortuner.setBrand("fortuner");
let lexus=new toyotaCar("lexus",14);
//lexus.setBrand("lexus");