// class ClassName{

// }

class Student{

    beginRegistration(name, age){
        this.name = name;
        this.age = age;
    }
}

let stu1 = new Student();
stu1.beginRegistration('Tola, 5');
console.log (stu1.name);
