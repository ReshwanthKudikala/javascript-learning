function test1(a){
    return a;
}
test1.x=100;

console.dir(test1)

//functions are callable objects
//function can be send as argument
function test(x){
    console.log(x());
}
test(function(){return "arg function"});



//closure=function + its surrounding data
let a=10;
function someFunction(){
    let b=20;
    return function(){
        return a+b;
    } 
}
let result=someFunction();
console.log(result());


//array methods
let arr=[10,20,30,40,50,60]

// let resul=[];

// for(let i of arr){
//     if(i<100){
//         resul.push(i);
//     }
// }
// console.log(resul);

// let resul=arr.filter(function(i){
//     return i<50;
// })
// console.log(resul);

let resul=arr.filter((i) => i<50)
console.log(resul);

//filter method is for selection
//map is for modification

let resu=arr.map((i) => i+10)
console.log(resu);

let ans=arr.map(i=>{
    if(i<30){
        return i+10;
    }
    else{
        return i+20;
    }
})
console.log(ans);

//forEach
arr.forEach((element,s)=>console.log('element at index',s, 'is',element))