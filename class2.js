const student=
{
    fullName:"shrdha khapra",
    marks:75,
    printMarks: function()
    {
        console.log("marks" ,this.marks);//student che marks 
    }
}


const employee={
    caltax() 
    {
        console.log("Tax rate is 10%");
    }
}
console.log(caltax);

const karanArjun={
    salary:60000,
}

karanArjun.__proto__=employee; 
