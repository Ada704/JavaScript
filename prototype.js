/* in JS, you can create a constructor without a class */

let EmpDetails = function(name, age){
    this.name = name;
    this.age = age;

    this.getAge = function(){
         return this.age;
    };  
};

EmpDetails.prototype.getName = function(){
    return this.name;
};

let emp1 = new EmpDetails('chioma', 15);
let emp2 = new EmpDetails('fred', 22);
console.log (emp1.getName());
console.log (emp1.getAge());
console.log (emp2.getName());
console.log (emp2.getAge());
