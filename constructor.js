
let arr=[1,2,3];
console.log(typeof arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[4]);

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//inserting elements

let l1=arr.unshift(10,20)
console.log(arr,l1)

let l2=arr.push(30,40)
console.log(arr,l2)

let l3=arr.splice(2,1,69)
console.log(arr,l3)


//deleting elements

let l4=arr.shift()
console.log(arr,l4)

let l5=arr.pop()
console.log(arr,l5)

let l6=arr.splice(2,1)
console.log(arr,l6)

let emp={
    empno:100,
    name:'ravi'
}
console.log(emp.empno);

for(let x in emp){
    console.log(emp[x]);
}
//insert into object
emp.city='knr';
console.log(emp)

//delete from object
delete emp.name;
console.log(emp);


//complex objects

let student={
    sno:1000,
    name:'raju',
    marks:[1,2,3,4,5],
    address:{
        street:'kphb',
        pincode:505001,
    },
    getData:function(){
        let avg=this.marks[0]+this.marks[1];
        return avg;
    }
}

console.log(student.getData());


 //constructor for objects

 function Person(id,name,age){
    this.id=id;
    this.name=name;
    this.age=age;
    // console.log(this);
 }
  
 Person.prototype.getName=function(){
    return this.name;
 }

 let person1=new Person(100,'Ravi',21);
 console.log(person1.getName());

 let person2=new Person(200,'Ramesh',22);
 console.log(person2);

class Srudent{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    getDetails(){
        return this.name;
    }
}
let person3=new Srudent(100,'Ravi',21);
console.log(person3.getDetails());