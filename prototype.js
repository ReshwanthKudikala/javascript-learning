let obj1={
    a:10
}

let obj2={
    b:20
}

//set obj1 as child to obj2
Object.setPrototypeOf(obj2,obj1);
console.log(obj2.b);
console.log(obj2.a);
console.log(obj2);


// function Person(name,marks){
//     this.name=name;
//     this.marks=marks;
// }

// function student(name,marks,course,mobile){
//     Person.call(this,name,marks);
//     this.course=course;
//     this.mobile=mobile;
// }
// student.prototype=Object.create(Person.prototype)

// let std=new student('Ravi',69,'AIML',9392);
// console.log(std);

class Person{
    constructor(name,marks){
        this.name=name;
        this.marks=marks;
    }
}
class Student extends Person{
    constructor(name,marks,course,mobile){
        super(name,marks)
        this.course=course;
        this.mobile=mobile;
    }
}
let std=new Student('Ravi',69,'AIML',9392);
console.log(std);
