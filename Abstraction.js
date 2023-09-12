// Hide details and show only essentials

function Employee(name, baseSalary, age){
    this.name = name;
    this.baseSalary = baseSalary;
    this.age = age;
    // i made the monthly bonus private//

    let monthlyBonus = 5000;

    let calculateFinalSalary =function(){
        let finalSalary = this.baseSalary + this.monthlyBonus;
        console.log ('Final Salary : '+finalSalary)

    }


    this. getEmpDetails = function(){
        console.log ('Name : '+this.name+' | BaseSalary : '+this.baseSalary);
    }
}
let emp1 = new Employee('Chioma', 300000, 30);
emp1.getEmpDetails();
emp1.monthlyBonus = 1000;
emp1.calculateFinalSalary();