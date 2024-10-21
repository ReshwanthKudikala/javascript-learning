//array of objects

let emp=[
    {
        eno:100,
        name:'Ravi',
        basic:2000,
        skills:['js','node'],
        city:'hyd'
    },
    {
        eno:200,
        name:'Raghu',
        basic:3000,
        skills:['jsk','node2'],
        city:'hyd'
    },
    {
        eno:300,
        name:'Raviraa',
        basic:4000,
        skills:['jsgre','node3'],
        city:'hyderabad'
    }
]

let empOfHyd=emp.filter(empObj=>empObj.city==='hyd')
console.log(empOfHyd);

let highBasic=emp.reduce((acc,empob)=>{
    if(acc.basic>empob.basic){
        return acc;
    }
    else{
        return empob;
    }
})
console.log(highBasic);

let hike=emp.map(i=>{
    if(i.city==='hyd'){
        i.basic=i.basic+10;
        return i;
    }
    else{
        i.basic=i.basic+20;
        return i;
    }
})
console.log(hike);


//Object methods
let student={
    roll:1,
    name:'Ravi',
    age:69
}

let keys=Object.keys(student)
console.log(keys)

let values=Object.values(student)
console.log(values)
Object.freeze(student); //objeCT VALUES CANNOT BE CHANGE OR MODIFIED

student.city='hyd';
console.log(student)

let obj1={
    a:10
}
let obj2={
    b:20
}
let re=Object.assign({},obj1,obj2);
console.log(re)

///////////mutability//////////
//primitives are immutable
//non-primitives are mutable


