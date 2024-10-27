//promises 
console.log("YOu made a promise to ur frnd that u would call him after 5 minutes");
console.log("Your frnd is waiting");
//create promise
let futureCondition=true;
let phoneCallPromise=new Promise((fullFilled,Rejected)=>{
    setTimeout(() => {
        if(futureCondition===true){
            fullFilled("hello frnd...how r u")
        }
        else{
            Rejected("sorry frnd...call u later")
        }
    }, 5000);
})
//consume promise
phoneCallPromise
.then((successMessage)=>{
    return successMessage;
})
.then((msg)=>{
    console.log("msg in second then is",msg);
})
.catch((errorMessage)=>{
    console.log(errorMessage);
})

console.log("last action");//to check whether the code is workingg sync or async

//json is language neutral
//api calls are made through it

let obj={
    firstname:'Ravi',
    scondname:'babu',
    age:21
}
let jsonData=JSON.stringify(obj);
console.log(jsonData);