// let a=10;
// let names=['ravi','ram']
// // export {a,names}

// //default export
// export default {a,names};

export let obj={
    eno:300,
    name:'Raviraa',
    basic:4000,
    skills:['jsgre','node3'],
    city:'hyderabad'
}

//copy of variables can be created
//copy of objects cannot be created without changing  it

let obj1={
    eno:300,
    name:'Raviraa',
    basic:4000,
    skills:['jsgre','node3'],
    city:'hyderabad'
}

let obj2=Object.assign({},obj1);
obj1.eno=400;
obj2.name='ravi';
console.log(obj1);
console.log(obj2);

