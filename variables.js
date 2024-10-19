let a;
console.log('value of a is',a);
a=100;
console.log('value of a is',a);
a=true;
console.log('value sof a is',a);
a=1000;
console.log('type of a is',typeof a);
//if else condition
let b=10;
let c=10;
if(b>c){
    console.log('b is big');
}else if(b==c){
    console.log('both are equal');
}else{
    console.log('c is big');
}
//switch
let x=1;
switch(x){
    case 1:
        console.log('first case');
        break;
    case 2:
        console.log('second case');
        break;
    default:
        console.log('invalid choice');
}
//camelcase
let ageOfPerson;
//function declaration
function findSumOfTwoNumbers(e,f){
    console.log('this is executed');
    let sum=e+f;
    return sum;
}
//call the function
let result=findSumOfTwoNumbers(10,20);
console.log(result);
//function to compare two numbers
function findBig(w,v){
    if(w>v){
        console.log('w is big');
    }
    else if(w==v){
        console.log('both are equal');
    }
    else{
        console.log('v is big');
    }
}
let res=findBig(20,10);
// function expression
let re=function (e,f){
    console.log('this is executed');
    let sum=e+f;
    return sum;
}
//call the function
let resu=re(10,20);
console.log(resu);
//array declaration
let arr=[1,2,3,4]
for(let i=0;i<4;i++){
    console.log(arr[i]);
}
//object decalration
let student={
    name:'sunny',
    sno:69,
    age:20
}
console.log(student.name);