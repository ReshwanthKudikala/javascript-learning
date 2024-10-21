//sum of elements of array using reduce
arr=[10,100,300]
let sum=arr.reduce((accumulator,element)=>accumulator+element);
console.log(sum);

//return samllest element
let small=arr.reduce((acc,ele)=>{
    if(acc<ele){
        return acc;
    }
    else{
        return ele;
    }
})
console.log(small);
//in one line
let smal=arr.reduce((ac,el)=>{
    return ac<el?ac:el;
})
console.log(smal);


let result=arr.find(elements=>elements===10);
console.log(result);
let index=arr.findIndex(elem=>elem==1);
console.log(index);
